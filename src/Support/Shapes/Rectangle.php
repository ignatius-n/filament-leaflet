<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Support\Shapes;

use Closure;
use EduardoRibeiroDev\FilamentLeaflet\Enums\Color;
use Illuminate\Database\Eloquent\Model;

class Rectangle extends Shape
{
    protected array $bounds;
    protected string $boundsColumn = 'bounds';
    protected ?string $jsonColumn = null;

    /**
     * @param array $corner1 Coordenada [lat, lng] do primeiro canto
     * @param array $corner2 Coordenada [lat, lng] do canto oposto
     */
    final public function __construct(array $corner1, array $corner2)
    {
        $this->bounds = [$corner1, $corner2];
    }

    /**
     * Convenience method to create a Rectangle instance with given corner coordinates.
     * @param array $corner1 Coordenate [lat, lng] of the first corner of the rectangle.
     * @param array $corner2 Coordenate [lat, lng] of the opposite corner of the rectangle.
     * @return static A new Rectangle instance with the specified corner coordinates.
     */
    public static function make(array $corner1, array $corner2): static
    {
        return new static($corner1, $corner2);
    }


    /**
     * Convenience method to create a Rectangle instance from four separate latitude and longitude values for the two corners.
     * @param float $lat1 Latitude of the first corner of the rectangle.
     * @param float $lng1 Longitude of the first corner of the rectangle.
     * @param float $lat2 Latitude of the opposite corner of the rectangle.
     * @param float $lng2 Longitude of the opposite corner of the rectangle.
     * @return static A new Rectangle instance with the specified corner coordinates.
     */
    public static function makeFromCoordinates(float $lat1, float $lng1, float $lat2, float $lng2): static
    {
        return new static([$lat1, $lng1], [$lat2, $lng2]);
    }

    /**
     * Create a Rectangle instance from an Eloquent record. The method will attempt to extract the rectangle bounds from the specified $boundsColumn, which can be a JSON string or an array. It will also set the title, description, popup fields, and color based on the provided parameters and the record's attributes.
     * @param Model $record The Eloquent model record to create the rectangle from.
     * @param string $boundsColumn The column name for the rectangle bounds (default: 'bounds').
     * @param string|null $titleColumn Optional column name for rectangle title (default: 'title').
     * @param string|null $descriptionColumn Optional column name for rectangle description (default: 'description').
     * @param array|null $popupFieldsColumns Optional array of column names to include in popup (default: all except id, boundsColumn, titleColumn, descriptionColumn, created_at, updated_at).
     * @param string|Color|null $color Optional rectangle color.
     * @param bool $syncRecord Whether to sync changes back to the record when the shape is edited on the map (default: true).
     * @param Closure|null $mapRecordCallback Optional Closure to further customize the rectangle based on the record.
     * @return static A new Rectangle instance configured based on the provided record.
     */
    public static function fromRecord(
        Model $record,
        string $boundsColumn = 'bounds',
        ?string $titleColumn = 'title',
        ?string $descriptionColumn = 'description',
        ?array $popupFieldsColumns = null,
        null|string|Color $color = null,
        bool $syncRecord = true,
        ?Closure $mapRecordCallback = null
    ): static {
        $bounds = [[0, 0], [0, 0]];

        if ($record->hasAttribute($boundsColumn)) {
            $value = $record->{$boundsColumn};
            $parsed = is_string($value) ? json_decode($value, true) : $value;
            if (is_array($parsed) && count($parsed) === 2) {
                $bounds = $parsed;
            }
        }

        $rectangle = new static($bounds[0], $bounds[1]);
        $rectangle->boundsColumn = $boundsColumn;
        $rectangle->jsonColumn = $boundsColumn;

        return $rectangle
            ->record($record, $syncRecord)
            ->title($record->{$titleColumn} ?? null)
            ->popupContent($record->{$descriptionColumn} ?? null)
            ->popupFields(is_array($popupFieldsColumns) ? $record->only($popupFieldsColumns) : $record->except([
                'id',
                $boundsColumn,
                $titleColumn,
                $descriptionColumn,
                'created_at',
                'updated_at',
            ]))
            ->color($color)
            ->mapRecordUsing($mapRecordCallback);
    }

    public function getType(): string
    {
        return 'rectangle';
    }

    protected function getShapeData(): array
    {
        return [
            'bounds' => $this->bounds,
        ];
    }

    public function isValid(): bool
    {
        return count($this->bounds) === 2
            && count($this->bounds[0]) === 2
            && count($this->bounds[1]) === 2;
    }

    protected function getLayerCoordinates(): array
    {
        // Calcula o centro do retângulo
        $lat1 = $this->bounds[0][0];
        $lng1 = $this->bounds[0][1];
        $lat2 = $this->bounds[1][0];
        $lng2 = $this->bounds[1][1];

        return [
            ($lat1 + $lat2) / 2,
            ($lng1 + $lng2) / 2,
        ];
    }

    protected function updateLayerData(array $data): void
    {
        if (isset($data['bounds']) && is_array($data['bounds']) && count($data['bounds']) === 2) {
            $this->bounds = $data['bounds'];
        }
    }

    protected function getMappedRecordAttributes(): array
    {
        $data = [
            $this->boundsColumn => $this->bounds,
        ];

        if ($this->jsonColumn) {
            return [$this->jsonColumn => $data];
        }

        return $data;
    }
}
