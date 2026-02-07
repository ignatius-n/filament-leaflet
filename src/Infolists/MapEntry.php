<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Infolists;

use EduardoRibeiroDev\FilamentLeaflet\Concerns\HasMapState;
use Filament\Infolists\Components\Entry;

class MapEntry extends Entry
{
    use HasMapState;
    protected string $view = 'filament-leaflet::infolists.map-entry';

    protected function setUp(): void
    {
        parent::setUp();
        $this->height(284);
        $this->state(function ($record) {
            if (!$record) return;

            if ($this->storeAsJson) {
                return $record->{$this->getName()};
            } else {
                return [
                    $this->latitudeFieldName => $record->{$this->latitudeFieldName},
                    $this->longitudeFieldName => $record->{$this->longitudeFieldName}
                ];
            }
        });
    }
}
