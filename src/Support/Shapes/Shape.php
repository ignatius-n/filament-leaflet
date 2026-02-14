<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Support\Shapes;

use Closure;
use EduardoRibeiroDev\FilamentLeaflet\Support\BaseLayer;
use EduardoRibeiroDev\FilamentLeaflet\Concerns\HasColor;
use EduardoRibeiroDev\FilamentLeaflet\Concerns\HasFillColor;

abstract class Shape extends BaseLayer
{
    use HasColor;
    use HasFillColor;

    protected ?int $weight = null;
    protected ?string $dashArray = null;

    /**
     * Retorna os dados específicos da forma.
     */
    abstract protected function getShapeData(): array;

    /**
     * Define a espessura da borda em pixels.
     */
    public function weight(null|Closure|int $weight): static
    {
        $this->weight = $this->evaluate($weight);
        return $this;
    }

    /**
     * Define o estilo do traço (tracejado).
     * Ex: '5, 10' (5px linha, 10px espaço).
     */
    public function dashArray(null|Closure|string $dashArray): static
    {
        $this->dashArray = $this->evaluate($dashArray);
        return $this;
    }

    /**
     * Retorna o array de opções visuais mesclado com as cores definidas.
     */
    protected function getShapeOptions(): array
    {
        return [
            'color'       => $this->getHexColor(),
            'fillColor'   => $this->getHexFillColor(),
            'opacity'     => $this->getOpacity(),
            'fillOpacity' => $this->getFillOpacity(),
            'weight'      => $this->weight,
            'dashArray'   => $this->dashArray
        ];
    }

    protected function getLayerData(): array
    {
        return array_merge(
            $this->getShapeData(),
            ['options' => $this->getShapeOptions()]
        );
    }
}
