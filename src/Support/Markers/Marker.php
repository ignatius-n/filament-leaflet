<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Support\Markers;

use Closure;
use EduardoRibeiroDev\FilamentLeaflet\Enums\Color;
use EduardoRibeiroDev\FilamentLeaflet\Support\BaseLayer;
use EduardoRibeiroDev\FilamentLeaflet\Concerns\HasColor;
use Filament\Support\Enums\IconSize;
use Filament\Support\Icons\Heroicon;
use Illuminate\Database\Eloquent\Model;

class Marker extends BaseLayer
{
    use HasColor;

    protected string $latitudeColumn = 'latitude';
    protected string $longitudeColumn = 'longitude';
    protected ?string $jsonColumn = null;

    protected float $latitude;
    protected float $longitude;
    protected bool $isDraggable = false;

    // Configurações de Ícone
    protected ?string $iconUrl = null;
    protected array $iconSize = [24, 36];
    protected ?Heroicon $heroicon = null;


    final public function __construct(float $latitude = 0, float $longitude = 0)
    {
        $this->latitude = $latitude;
        $this->longitude = $longitude;
    }

    /**
     * Convenience method to create a Marker instance with given latitude and longitude.
     * @param float $latitude The latitude for the marker.
     * @param float $longitude The longitude for the marker.
     * @return static A new Marker instance with the specified coordinates.
     */
    public static function make(float $latitude, float $longitude): static
    {
        return new static($latitude, $longitude);
    }

    /**
     * Create a Marker instance from an Eloquent record.
     * @param Model $record The Eloquent model record to create the marker from.
     * @param string $latColumn The column name for latitude (default: 'latitude').
     * @param string $lngColumn The column name for longitude (default: 'longitude').
     * @param string|null $jsonColumn Optional column name if coordinates are stored as JSON.
     * @param string|null $titleColumn Optional column name for marker title (default: 'title').
     * @param string|null $descriptionColumn Optional column name for marker description (default: 'description').
     * @param array|null $popupFieldsColumns Optional array of column names to include in popup (default: all except id, lat, lng, title, description, timestamps).
     * @param string|Color|null $color Optional marker color.
     * @param bool $syncRecord Whether to sync changes back to the record when the marker is dragged on the map (default: true).
     * @param string|Closure|null $iconUrl Optional URL or Closure to determine the marker's icon URL.
     * @param Closure|null $mapRecordCallback Optional Closure to further customize the marker based on the record.
     * @return static A new Marker instance configured based on the provided record.
     */
    public static function fromRecord(
        Model $record,
        string $latColumn = 'latitude',
        string $lngColumn = 'longitude',
        ?string $jsonColumn = null,
        ?string $titleColumn = 'title',
        ?string $descriptionColumn = 'description',
        ?array $popupFieldsColumns = null,
        null|string|Color $color = null,
        bool $syncRecord = true,
        ?string $iconUrl = null,
        ?Closure $mapRecordCallback = null
    ): static {
        $lat = 0;
        $lng = 0;

        if ($jsonColumn) {
            $coords = $record->{$jsonColumn};
            $coords = is_string($coords) ? json_decode($coords, true) : $coords;

            $lat = $coords[$latColumn] ?? 0;
            $lng = $coords[$lngColumn] ?? 0;
        } else {
            $lat = $record->{$latColumn} ?? 0;
            $lng = $record->{$lngColumn} ?? 0;
        }

        $marker = new static($lat, $lng);
        $marker->latitudeColumn = $latColumn;
        $marker->longitudeColumn = $lngColumn;
        $marker->jsonColumn = $jsonColumn;

        return $marker
            ->record($record, $syncRecord)
            ->title($record->{$titleColumn} ?? null)
            ->popupContent($record->{$descriptionColumn} ?? null)
            ->popupFields(is_array($popupFieldsColumns) ? $record->only($popupFieldsColumns) : $record->except([
                'id',
                $latColumn,
                $lngColumn,
                $jsonColumn,
                $titleColumn,
                $descriptionColumn,
                'created_at',
                'updated_at',
            ]))
            ->color($color)
            ->icon($iconUrl)
            ->mapRecordUsing($mapRecordCallback);
    }

    /*
    |--------------------------------------------------------------------------
    | Métodos abstratos do Layer
    |--------------------------------------------------------------------------
    */

    public function getType(): string
    {
        return 'marker';
    }

    protected function getLayerData(): array
    {
        return [
            'coords'    => [$this->latitude, $this->longitude],
            'icon'      => $this->getIconOptions(),
            'draggable' => $this->isDraggable,
        ];
    }

    /**
     * Check if the marker's coordinates are valid.
     * @return bool True if the coordinates are valid, false otherwise.
     * A marker is considered valid if its latitude is between -90 and 90, and its longitude is between -180 and 180.
     */
    public function isValid(): bool
    {
        return $this->latitude >= -90 && $this->latitude <= 90 &&
            $this->longitude >= -180 && $this->longitude <= 180;
    }

    /*
    |--------------------------------------------------------------------------
    | Métodos do Marker
    |--------------------------------------------------------------------------
    */

    /**
     * Set the marker's icon URL.
     * @param string|Closure|null $url The URL of the icon or a Closure that returns the URL.
     * @return $this
     */
    public function iconUrl(null|Closure|string $url = null): static
    {
        $this->iconUrl = $this->evaluate($url);

        if ($this->iconUrl !== null) {
            $this->heroicon = null;
        }

        return $this;
    }

    /**
     * Set the marker's icon size.
     * @param Closure|array $size An array with width and height or a Closure that returns such an array.
     * @return $this
     */
    public function iconSize(Closure|array $size = [24, 36]): static
    {
        $this->iconSize = (array) $this->evaluate($size);
        return $this;
    }

    public function heroicon(null|string|Heroicon|Closure $icon = null): static
    {
        $evaluatedIcon = $this->evaluate($icon);

        $this->heroicon = ($evaluatedIcon instanceof Heroicon || $evaluatedIcon === null)
            ? $evaluatedIcon
            : Heroicon::tryFrom(str_replace('heroicon-', '', $evaluatedIcon));

        if ($this->heroicon !== null) {
            $this->iconUrl = null;
        }

        return $this;
    }

    /**
     * Convenience method to set both icon URL and size at once.
     * @param string|Closure|null $url The URL of the icon or a Closure that returns the URL.
     * @param Closure|array $size An array with width and height or a Closure that returns such an array.
     * @return $this
     */
    public function icon(null|Closure|Heroicon|string $icon = null, Closure|array $size = [24, 36]): static
    {
        $evaluatedIcon = $this->evaluate($icon);
        if ($evaluatedIcon instanceof Heroicon || str_starts_with($icon, 'heroicon') || Heroicon::tryFrom($evaluatedIcon) !== null) {
            $this->heroicon($icon);
        } else {
            $this->iconUrl($icon);
        }

        $this->iconSize($size);
        return $this;
    }

    private function resolveHeroicon(): ?string
    {
        if ($this->heroicon === null) {
            return null;
        }

        $iconClass = $this->heroicon->getIconForSize(IconSize::Small);
        return svg($iconClass)->toHtml();
    }

    public function getIconOptions()
    {
        return [
            'color'    => $this->getRgbColor(500),
            'url'      => $this->iconUrl,
            'size'     => $this->iconSize,
            'heroicon' => $this->resolveHeroicon(),
        ];
    }

    /**
     * Set whether the marker is draggable.
     * @param Closure|bool $condition A boolean or a Closure that returns a boolean to determine if the marker should be draggable.
     * @return $this
     */
    public function draggable(Closure|bool $condition = true): static
    {
        $this->isDraggable = (bool) $this->evaluate($condition);
        return $this;
    }

    /*
    |--------------------------------------------------------------------------
    | Utilitários
    |--------------------------------------------------------------------------
    */

    protected function getLayerCoordinates(): array
    {
        return [$this->latitude, $this->longitude];
    }

    /**
     * Calculate the distance in kilometers to another marker using the Haversine formula.
     * @param Marker $target The target marker to calculate the distance to.
     * @return float The distance in kilometers.
     */
    public function distanceTo(Marker $target): float
    {
        $earthRadius = 6371;

        $latFrom = deg2rad($this->latitude);
        $lonFrom = deg2rad($this->longitude);
        $latTo = deg2rad($target->latitude);
        $lonTo = deg2rad($target->longitude);

        $latDiff = $latTo - $latFrom;
        $lonDiff = $lonTo - $lonFrom;

        $a = sin($latDiff / 2) * sin($latDiff / 2) +
            cos($latFrom) * cos($latTo) *
            sin($lonDiff / 2) * sin($lonDiff / 2);

        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return $earthRadius * $c;
    }

    protected function updateLayerData(array $data): void
    {
        $this->latitude = $data['lat'] ?? $this->latitude;
        $this->longitude = $data['lng'] ?? $this->longitude;
    }

    protected function getMappedRecordAttributes(): array
    {
        $data = [
            $this->latitudeColumn => $this->latitude,
            $this->longitudeColumn => $this->longitude,
        ];

        if ($this->jsonColumn) {
            return [$this->jsonColumn => $data];
        }

        return $data;
    }
}
