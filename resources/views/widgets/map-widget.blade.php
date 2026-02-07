@php
    $config = $this->getMapData();
    $height = $this->getMapHeight();
@endphp


<x-filament-widgets::widget>

    <x-filament::section>
        <x-slot name="heading">
            {{ $this->getHeading() }}
        </x-slot>

        <x-filament-leaflet::map
            :config="$config"
            widget
        />

    </x-filament::section>

    {{-- Obtém apenas o formulário da ação (modal) --}}
    {{ $this->createMarkerAction->getFormToSubmit() }}
    <x-filament-actions::modals />

    @push('styles')
        <style>
            {!! $this->getCustomStyles() !!}
        </style>
    @endpush


    @push('scripts')
        <script>
            {!! $this->getAdditionalScripts() !!}
        </script>
    @endpush
</x-filament-widgets::widget>
