@props([
    'config',
    'widget',
    'entry',
    'field'
])

@php
    use Illuminate\Support\Js;
    $mapClass = match(true) {
        isset($field) => 'leafletMapField',
        isset($entry) => 'leafletMapEntry',
        isset($widget) => 'leafletMapWidget',
    };
@endphp

<div
    wire:ignore
    x-data="{{ $mapClass }}(
        $wire, 
        {{ Js::from($config) }},
    )"
    style="height: {{ $config['mapHeight'] }}px"
>
    <div id="{{ $config['mapId'] }}"></div>
</div>