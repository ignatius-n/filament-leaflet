<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Support\Shapes;

use Closure;
use Illuminate\Database\Eloquent\Model;

class Polyline extends Shape
{
    protected array $points = [];
    protected string $pointsColumn = 'points';
    protected ?string $jsonColumn = null;

    final public function __construct(array ...$points)
    {
        $this->points = $points;
    }

    /**
     * Convenience method to create a Polyline instance with given points.
     * @param array ...$points Variable number of arrays, each representing a point as [latitude, longitude]. Can also accept a single array of points (e.g. make([[-15.0, -50.0], [-15.1, -50.1]])).
     * @return static A new Polyline instance with the specified points.
     */
    public static function make(array ...$points): static
    {
        return new static(...(count($points) == 1 ? $points[0] : $points));
    }

    /**
     * Create a Polyline instance from an Eloquent record. The method will attempt to extract the polyline points from the specified $pointsColumn, which can be a JSON string or an array. It will also set the title, description, popup fields, and color based on the provided parameters and the record's attributes.
     * @param Model $record The Eloquent model record to create the polyline from.
     * @param string $pointsColumn The column name for the polyline points (default: 'points').
     * @param string|null $titleColumn Optional column name for polyline title (default: 'title').
     * @param string|null $descriptionColumn Optional column name for polyline description (default: 'description').
     * @param array|null $popupFieldsColumns Optional array of column names to include in popup (default: all except id, pointsColumn, titleColumn, descriptionColumn, created_at, updated_at).
     * @param string|array|null $color Optional polyline color.
     * @param bool $syncRecord Whether to sync changes back to the record when the shape is edited on the map (default: true).
     * @param Closure|null $mapRecordCallback Optional Closure to further customize the polyline based on the record.
     * @return static A new Polyline instance configured based on the provided record.
     */
    public static function fromRecord(
        Model $record,
        string $pointsColumn = 'points',
        ?string $titleColumn = 'title',
        ?string $descriptionColumn = 'description',
        ?array $popupFieldsColumns = null,
        string|array|null $color = null,
        bool $syncRecord = true,
        ?Closure $mapRecordCallback = null
    ): static {
        $points = [];

        if ($record->hasAttribute($pointsColumn)) {
            $value = $record->{$pointsColumn};
            $points = is_string($value) ? json_decode($value, true) : $value;
            $points = is_array($points) ? $points : [];
        }

        $polyne = new static($points);
        $polyne->pointsColumn = $pointsColumn;
        $polyne->jsonColumn = $pointsColumn;

        return $polyne
            ->record($record, $syncRecord)
            ->title($record->{$titleColumn} ?? null)
            ->popupContent($record->{$descriptionColumn} ?? null)
            ->popupFields(is_array($popupFieldsColumns) ? $record->only($popupFieldsColumns) : $record->except([
                'id',
                $pointsColumn,
                $titleColumn,
                $descriptionColumn,
                'created_at',
                'updated_at',
            ]))
            ->color($color)
            ->mapRecordUsing($mapRecordCallback);
    }

    /**
     * Add a point to the polyline. The $latitude and $longitude parameters specify the coordinates of the point to be added. This method appends the new point to the existing list of points that define the polyline.
     * @param float $latitude The latitude of the point to be added to the polyline.
     * @param float $longitude The longitude of the point to be added to the polyline.
     * @return $this The current Polyline instance with the new point added.
     */
    public function addPoint(float $latitude, float $longitude): static
    {
        $this->points[] = [$latitude, $longitude];
        return $this;
    }

    public function getType(): string
    {
        return 'polyline';
    }

    protected function getShapeData(): array
    {
        return [
            'points' => $this->points,
        ];
    }

    public function isValid(): bool
    {
        // Uma linha precisa de pelo menos 2 pontos
        return count($this->points) >= 2;
    }

    protected function getLayerCoordinates(): array
    {
        if (empty($this->points)) {
            return [0, 0];
        }

        // Calcula o ponto médio da linha
        $latSum = 0;
        $lngSum = 0;
        foreach ($this->points as $point) {
            $latSum += $point[0];
            $lngSum += $point[1];
        }

        return [
            $latSum / count($this->points),
            $lngSum / count($this->points),
        ];
    }

    protected function updateLayerData(array $data): void
    {
        if (isset($data['points']) && is_array($data['points'])) {
            $this->points = $data['points'];
        }
    }

    protected function getMappedRecordAttributes(): array
    {
        $data = [
            $this->pointsColumn => $this->points,
        ];

        if ($this->jsonColumn) {
            return [$this->jsonColumn => $data];
        }

        return $data;
    }
}
