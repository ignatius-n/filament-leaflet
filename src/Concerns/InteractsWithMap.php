<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Concerns;

use Filament\Actions\Action;
use Livewire\Attributes\On;

trait InteractsWithMap
{
    #[On('marker-updated')]
    public function resetTable(): void
    {
        parent::resetTable();
    }

    protected function afterActionCalled(Action $action): void
    {
        $this->dispatch('refresh-maps');
    }
}
