<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Concerns;

use Closure;
use EduardoRibeiroDev\FilamentLeaflet\Enums\TileLayer;
use EduardoRibeiroDev\FilamentLeaflet\Support\Markers\Marker;
use Filament\Support\Components\Attributes\ExposedLivewireMethod;

trait HasMapState
{
    use HasMapConfig {
        getGeoJsonTooltip as getParentGeoJsonTooltip;
        getGeoJsonUrl as getParentGeoJsonUrl;
        getMapData as getParentMapData;
    }

    protected array $geoJsonData = [];
    protected ?string $geoJsonTooltip = null;
    protected array $markers = [];
    protected array $shapes = [];
    protected ?string $latitudeFieldName = 'latitude';
    protected ?string $longitudeFieldName = 'longitude';
    protected bool $storeAsJson = false;
    protected ?Marker $pickMarker = null;

    public function center(float|array|Closure $latitudeOrCoordinates, float|Closure $longitude): static
    {
        $latitudeOrCoordinates = $this->evaluate($latitudeOrCoordinates);

        if (is_array($latitudeOrCoordinates)) {
            $this->mapCenter = $latitudeOrCoordinates;
        } else {
            $this->mapCenter = [
                $latitudeOrCoordinates,
                $this->evaluate($longitude),
            ];
        }

        return $this;
    }

    public function height(int|Closure $height): static
    {
        $this->mapHeight = $this->evaluate($height);

        return $this;
    }

    public function zoom(int|Closure $zoomLevel): static
    {
        $this->defaultZoom = $this->evaluate($zoomLevel);

        return $this;
    }

    public function attributionControl(bool|Closure $enabled = true): static
    {
        $this->hasAttributionControl = $this->evaluate($enabled);

        return $this;
    }

    public function fullscreenControl(bool|Closure $enabled = true): static
    {
        $this->hasFullscreenControl = $this->evaluate($enabled);

        return $this;
    }

    public function searchControl(bool|Closure $enabled = true): static
    {
        $this->hasSearchControl = $this->evaluate($enabled);

        return $this;
    }

    public function scaleControl(bool|Closure $enabled = true): static
    {
        $this->hasScaleControl = $this->evaluate($enabled);

        return $this;
    }

    public function zoomControl(bool|Closure $enabled = true): static
    {
        $this->hasZoomControl = $this->evaluate($enabled);

        return $this;
    }

    public function drawControl(bool|Closure $enabled = true): static
    {
        $this->hasDrawControl = $this->evaluate($enabled);

        return $this;
    }

    public function tileLayersUrl(TileLayer|Closure|string|array $urls): static
    {
        $this->tileLayersUrl = $this->evaluate($urls);

        return $this;
    }

    public function minZoom(int|Closure $minZoom): static
    {
        $this->minZoom = $this->evaluate($minZoom);

        return $this;
    }

    public function maxZoom(int|Closure $maxZoom): static
    {
        $this->maxZoom = $this->evaluate($maxZoom);

        return $this;
    }

    public function geoJsonUrl(string|Closure $url): static
    {
        $this->geoJsonUrl = $this->evaluate($url);

        return $this;
    }

    public function geoJsonData(array|Closure $data): static
    {
        $this->geoJsonData = $this->evaluate($data);

        return $this;
    }

    public function geoJsonColors(array|Closure $colors): static
    {
        $this->geoJsonColors = $this->evaluate($colors);

        return $this;
    }

    public function geoJsonTooltip(string|Closure|null $tooltip): static
    {
        $this->geoJsonTooltip = $this->evaluate($tooltip);

        return $this;
    }

    public function markers(array|Closure $markers): static
    {
        $this->markers = $this->evaluate($markers);

        return $this;
    }

    public function shapes(array|Closure $shapes): static
    {
        $this->shapes = $this->evaluate($shapes);

        return $this;
    }

    public function latitudeFieldName(string|Closure|null $name): static
    {
        $this->latitudeFieldName = $this->evaluate($name);

        return $this;
    }

    public function longitudeFieldName(string|Closure|null $name): static
    {
        $this->longitudeFieldName = $this->evaluate($name);

        return $this;
    }

    public function storeAsJson(bool|Closure $value = true): static
    {
        $this->storeAsJson = $this->evaluate($value);

        return $this;
    }

    public function pickMarker(Marker|Closure|null $marker)
    {
        $this->pickMarker = $this->evaluate($marker, [
            'marker' => $this->pickMarker
        ]);

        return $this;
    }

    /** ---------- GETTERS ---------- */

    function getPickMarkerData(): array
    {
        $pickMarker = null;

        if ($this->pickMarker) {
            $pickMarker = $this->pickMarker;
        } else {
            $pickMarker = new Marker;

            if ($this->isDisabled()) {
                $pickMarker->grey();
            }
        }

        return $pickMarker->toArray();
    }

    protected function getMarkers(): array
    {
        return $this->markers;
    }

    protected function getShapes(): array
    {
        return $this->shapes;
    }

    protected function getGeoJsonTooltip(): string
    {
        if ($this->geoJsonTooltip) {
            return $this->geoJsonTooltip;
        }

        return $this->getParentGeoJsonTooltip();
    }

    protected function getGeoJsonUrl(): ?string
    {
        if ($this->geoJsonUrl) {
            return $this->geoJsonUrl;
        }

        $record = $this->getRecord();
        if ($record && method_exists($record, 'getGeoJsonUrl')) {
            return $record->getGeoJsonUrl();
        }

        return $this->getParentGeoJsonUrl();
    }

    #[ExposedLivewireMethod]
    public function handleMapClick(float $latitude, float $longitude): void {}

    #[ExposedLivewireMethod]
    public function handleLayerClick(string $layerId): void {}

    private function getMapFieldData(): array
    {
        return [
            'key'                => $this->getKey(),
            'pickMarker'         => $this->getPickMarkerData(),
            'latitudeFieldName'  => $this->latitudeFieldName,
            'longitudeFieldName' => $this->longitudeFieldName,
            'statePath'          => $this->getStatePath(),
            'state'              => $this->getState(),
            'disabled'           => $this->isDisabled()
        ];
    }

    public function getMapData(): array
    {
        return array_merge(
            $this->getParentMapData(),
            ['state' => $this->getMapFieldData()]
        );
    }
}
