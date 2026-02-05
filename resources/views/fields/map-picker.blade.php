@php
    $config = $getMapData();
    $statePath = $getStatePath();
@endphp

<x-dynamic-component
    :component="$getFieldWrapperView()"
    :field="$field"
>
    <x-filament-leaflet::map
        :config="$config"
        :state-path="$statePath"
    />

</x-dynamic-component>