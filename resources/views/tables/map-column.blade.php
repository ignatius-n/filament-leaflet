@php
    $config = $getMapData();
    $isCircular = $getIsCircular();
@endphp

<div 
    style="width: {{ $getWidth() }}; padding: 5px;"
    wire:key="{{ $config['mapId'] }}"
>
    <x-filament-leaflet::map
        :config="$config"
        column
    />

    @if ($isCircular)
        @push('styles')
            <style>
                .fi-ta-col .leaflet-container {
                    border-radius: 50%;
                }
            </style>
        @endpush
    @endif
</div>