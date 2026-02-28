<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Support\Shapes;

use Closure;
use EduardoRibeiroDev\FilamentLeaflet\Support\BaseLayer;
use EduardoRibeiroDev\FilamentLeaflet\Concerns\HasPath;

abstract class Shape extends BaseLayer
{
    use HasPath;

    /**
     * Retorna os dados específicos da forma.
     */
    abstract protected function getShapeData(): array;

    /**
     * Retorna o array de opções visuais mesclado com as cores definidas.
     */
    protected function getShapeOptions(): array
    {
        return [
            'color'        => $this->getRgbColor(500),
            'fillColor'    => $this->getRgbFillColor(400),
            'opacity'      => $this->getOpacity(),
            'fillOpacity'  => $this->getFillOpacity(),
            'weight'       => $this->getWeight(),
            'smoothFactor' => $this->getSmoothFactor(),
            'dashArray'    => $this->getDashArray(),
            'dashOffset'   => $this->getDashOffset(),
            'stroke'       => $this->getStroke(),
            'lineCap'      => $this->getLineCap(),
            'lineJoin'     => $this->getLineJoin(),
            'fill'         => $this->getFill(),
            'fillRule'     => $this->getFillRule(),
            'noClip'       => $this->getNoClip(),
        ];
    }

    protected function getLayerData(): array
    {
        return array_merge(
            $this->getShapeData(),
            ['options' => $this->getShapeOptions()]
        );
    }

    public function getDefaultFillOpacity(): float
    {
        return 0.35;
    }
}
