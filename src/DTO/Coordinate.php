<?php

namespace EduardoRibeiroDev\FilamentLeaflet\DTO;

use Illuminate\Contracts\Support\Arrayable;

readonly class Coordinate implements Arrayable
{
    public function __construct(
        public float $lat,
        public float $lng,
    ) {}

    public function toArray()
    {
        return [$this->lat, $this->lng];
    }

    public static function from(array|object $coordinates): static
    {
        $lat = is_array($coordinates) ? ($coordinates['lat'] ?? $coordinates[0]) : $coordinates->lat;
        $lng = is_array($coordinates) ? ($coordinates['lng'] ?? $coordinates[1]) : $coordinates->lng;

        return new static($lat, $lng);
    }
}
