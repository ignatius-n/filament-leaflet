<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Support\Shapes;

use Closure;
use Illuminate\Database\Eloquent\Model;

class Circle extends Shape
{
    protected array $center; // [lat, lng]
    protected float $radius = 50000;
    protected string $radiusColumn = 'radius';
    protected string $latitudeColumn = 'latitude';
    protected string $longitudeColumn = 'longitude';

    final public function __construct(float $latitude, float $longitude)
    {
        $this->center = [$latitude, $longitude];
    }

    /**
     * Convenience method to create a Circle instance with given latitude and longitude.
     * @param float $latitude The latitude for the circle's center.
     * @param float $longitude The longitude for the circle's center.
     * @return static A new Circle instance with the specified center coordinates.
     */
    public static function make(float $latitude, float $longitude): static
    {
        return new static($latitude, $longitude);
    }

    /**
     * Create a Circle instance from an Eloquent record.
     * @param Model $record The Eloquent model record to create the circle from.
     * @param string $latColumn The column name for latitude (default: 'latitude').
     * @param string $lngColumn The column name for longitude (default: 'longitude').
     * @param string $radiusColumn The column name for radius (default: 'radius').
     * @param string|null $jsonColumn Optional column name if coordinates are stored as JSON.
     * @param string|null $titleColumn Optional column name for circle title (default: 'title').
     * @param string|null $descriptionColumn Optional column name for circle description (default: 'description').
     * @param array|null $popupFieldsColumns Optional array of column names to include in popup (default: all except id, lat, lng, radius, title, description, timestamps).
     * @param string|array|null $color Optional circle color.
     * @param bool $syncRecord Whether to sync changes back to the record when the shape is edited on the map (default: true).
     * @param Closure|null $mapRecordCallback Optional Closure to further customize the circle based on the record.
     * @return static A new Circle instance configured based on the provided record.
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
        $radius = 0;

        if ($jsonColumn) {
            $coords = $record->{$jsonColumn};
            $coords = is_string($coords) ? json_decode($coords, true) : $coords;

            $lat = $coords[$latColumn] ?? 0;
            $lng = $coords[$lngColumn] ?? 0;
            $radius = $coords[$radiusColumn] ?? 50000;
        } else {
            $lat = $record->{$latColumn} ?? 0;
            $lng = $record->{$lngColumn} ?? 0;
            $radius = $record->{$radiusColumn} ?? 50000;
        }

        $circle = (new static($lat, $lng));

        $circle->radiusColumn = $radiusColumn;
        $circle->latitudeColumn = $latColumn;
        $circle->longitudeColumn = $lngColumn;
        $circle->recordJsonColumn = $jsonColumn;

        return $circle
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
            ->radius($radius)
            ->mapRecordUsing($mapRecordCallback);
    }

    /*
    |--------------------------------------------------------------------------
    | Radius Methods
    |--------------------------------------------------------------------------
    */

    /**
     * Set the radius of the circle in meters.
     * @param float $meters The radius in meters.
     * @return $this
     */
    public function radius(float $meters): static
    {
        $this->radius = $meters;
        return $this;
    }

    /**
     * Set the radius of the circle in kilometers.
     * @param float $km The radius in kilometers.
     * @return $this
     */
    public function radiusInKilometers(float $km): static
    {
        return $this->radius($km * 1000);
    }

    /**
     * Set the radius of the circle in miles.
     * @param float $miles The radius in miles.
     * @return $this
     */
    public function radiusInMiles(float $miles): static
    {
        return $this->radius($miles * 1609.344);
    }

    /**
     * Set the radius of the circle in feet.
     * @param float $feet The radius in feet.
     * @return $this
     */
    public function radiusInFeet(float $feet): static
    {
        return $this->radius($feet * 0.3048);
    }

    /*
    |--------------------------------------------------------------------------
    | Layer Implementation
    |--------------------------------------------------------------------------
    */

    public function getType(): string
    {
        return 'circle';
    }

    protected function getShapeData(): array
    {
        return [
            'center'  => $this->center,
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
        return count($this->center) === 2 &&
            $this->center[0] >= -90 && $this->center[0] <= 90 &&
            $this->center[1] >= -180 && $this->center[1] <= 180 &&
            $this->radius > 0;
    }

    /**
     * Get the center coordinates of the circle.
     * @return array An array containing the latitude and longitude of the circle's center.
     * The first element is the latitude and the second element is the longitude.
     */
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
        return [
            $this->latitudeColumn => $this->center[0],
            $this->longitudeColumn => $this->center[1],
            $this->radiusColumn => $this->radius,
        ];
    }
}
