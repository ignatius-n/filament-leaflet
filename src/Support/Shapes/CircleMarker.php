<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Support\Shapes;

use Closure;
use Illuminate\Database\Eloquent\Model;

class CircleMarker extends Shape
{
    protected array $center;
    protected int $radius = 10;
    protected string $radiusColumn = 'radius';
    protected string $latitudeColumn = 'latitude';
    protected string $longitudeColumn = 'longitude';
    protected ?string $jsonColumn = null;

    final public function __construct(float $latitude, float $longitude)
    {
        $this->center = [$latitude, $longitude];
    }

    /**
     * Convenience method to create a CircleMarker instance with given latitude and longitude.
     * @param float $latitude The latitude for the circle marker's center.
     * @param float $longitude The longitude for the circle marker's center.
     * @return static A new CircleMarker instance with the specified center coordinates.
     */
    public static function make(float $latitude, float $longitude): static
    {
        return new static($latitude, $longitude);
    }

    /**
     * Create a CircleMarker instance from an Eloquent record.
     * @param Model $record The Eloquent model record to create the circle marker from.
     * @param string $latColumn The column name for latitude (default: 'latitude').
     * @param string $lngColumn The column name for longitude (default: 'longitude').
     * @param string $radiusColumn The column name for radius (default: 'radius').
     * @param string|null $jsonColumn Optional column name if coordinates are stored as JSON.
     * @param string|null $titleColumn Optional column name for circle marker title (default: 'title').
     * @param string|null $descriptionColumn Optional column name for circle marker description (default: 'description').
     * @param array|null $popupFieldsColumns Optional array of column names to include in popup (default: all except id, lat, lng, radius, title, description, timestamps).
     * @param bool $syncRecord Whether to sync changes back to the record when the shape is edited on the map (default: true).
     * @param string|array|null $color Optional circle marker color.
     * @param Closure|null $mapRecordCallback Optional Closure to further customize the circle marker based on the record.
     * @return static A new CircleMarker instance configured based on the provided record.
     */
    public static function fromRecord(
        Model $record,
        string $latColumn = 'latitude',
        string $lngColumn = 'longitude',
        string $radiusColumn = 'radius',
        ?string $jsonColumn = null,
        ?string $titleColumn = 'title',
        ?string $descriptionColumn = 'description',
        ?array $popupFieldsColumns = null,
        string|array|null $color = null,
        bool $syncRecord = true,
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

        $circleMarker = new static($lat, $lng);
        $circleMarker->radiusColumn = $radiusColumn;
        $circleMarker->latitudeColumn = $latColumn;
        $circleMarker->longitudeColumn = $lngColumn;
        $circleMarker->jsonColumn = $jsonColumn;

        return $circleMarker
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
            ->mapRecordUsing($mapRecordCallback);
    }


    /**
     * Set the radius of the circle marker in pixels. The $pixels parameter can be an integer or a Closure that returns an integer. If a Closure is provided, it will be evaluated to get the actual radius value.
     * @param Closure|null|int $pixels The radius of the circle marker in pixels. Can be an integer or a Closure that returns an integer. If a Closure is provided, it will be evaluated to get the actual radius value. If null is provided, any existing radius setting will be removed.
     * @return $this
     */
    public function radius(int $pixels): static
    {
        $this->radius = $pixels;
        return $this;
    }

    public function getType(): string
    {
        return 'circleMarker';
    }

    protected function getShapeData(): array
    {
        return [
            'center' => $this->center,
        ];
    }

    protected function getShapeOptions(): array
    {
        return [
            'radius' => $this->radius,
            ...parent::getShapeOptions()
        ];
    }

    public function isValid(): bool
    {
        return count($this->center) === 2 && $this->radius > 0;
    }

    protected function getLayerCoordinates(): array
    {
        return $this->center;
    }

    protected function updateLayerData(array $data): void
    {
        $this->center[0] = $data['lat'] ?? $this->center[0];
        $this->center[1] = $data['lng'] ?? $this->center[1];
        $this->radius = $data['radius'] ?? $this->radius;
    }

    protected function getMappedRecordAttributes(): array
    {
        $data = [
            $this->latitudeColumn => $this->center[0],
            $this->longitudeColumn => $this->center[1],
            $this->radiusColumn => $this->radius,
        ];

        if ($this->jsonColumn) {
            return [$this->jsonColumn => $data];
        }

        return $data;
    }
}
