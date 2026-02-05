@props([
    'config',
    'statePath' => null
])

@php
    use Illuminate\Support\Js;
@endphp

<div
    wire:ignore
    x-data="leafletMap(
        $wire, 
        {{ Js::from($config) }},
        {{ Js::from($statePath) }}
    )"
    style="height: {{ $config['mapHeight'] }}px"
>
    <div id="{{ $config['mapId'] }}"></div>
</div>