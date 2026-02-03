<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Concerns;

use Illuminate\Support\Facades\Storage;

use function Illuminate\Support\now;

trait HasGeoJsonFile
{
    protected string $geoJsonFileAttribute = 'geojson';
    protected ?string $geoJsonFileDisk = null;
    protected ?int $expirationMinutes = null;

    /**
     * Returns the model attribute name that stores the geojson.
     */
    public function getGeoJsonFileAttributeName(): string
    {
        return $this->geoJsonFileAttribute ?? 'geojson';
    }

    /**
     * Returns the filesystem disk to use for generating the url.
     */
    public function getGeoJsonFileDisk(): ?string
    {
        return $this->geoJsonFileDisk;
    }

    /**
     * Returns an accessible URL for the GeoJSON file, or null if none.
     */
    public function getGeoJsonUrl(): ?string
    {
        $attribute = $this->getGeoJsonFileAttributeName();
        $value = $this->{$attribute} ?? null;

        if (empty($value)) {
            return null;
        }

        // If it's already a valid URL, return as-is
        if (filter_var($value, FILTER_VALIDATE_URL)) {
            return $value;
        }

        $disk = $this->getGeoJsonFileDisk();
        $storage = Storage::disk($disk);

        if ($storage->exists($value)) {
            if ($this->expirationMinutes) {
                return $storage->temporaryUrl(
                    $value,
                    now()->addMinutes($this->expirationMinutes)
                );
            }

            return $storage->url($value);
        }

        return asset('storage/' . $value);
    }
}
