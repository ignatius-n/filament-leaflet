<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Concerns;

use Closure;
use EduardoRibeiroDev\FilamentLeaflet\Enums\Color;

trait HasColor
{
    protected ?string $color = null;
    protected float $opacity = 1;

    public function color(null|string|Closure|Color $color): static
    {
        $newColor = $this->evaluate($color);

        if ($newColor === null) {
            $this->color = null;
        } else {
            $this->color = $newColor instanceof Color
                ? $newColor->value
                : Color::from($newColor)->value;
        }

        return $this;
    }

    /*
    |--------------------------------------------------------------------------
    | Convenience Methods
    |--------------------------------------------------------------------------
    */

    public function blue(): static
    {
        return $this->color(Color::Blue);
    }

    public function red(): static
    {
        return $this->color(Color::Red);
    }

    public function green(): static
    {
        return $this->color(Color::Green);
    }

    public function orange(): static
    {
        return $this->color(Color::Orange);
    }

    public function yellow(): static
    {
        return $this->color(Color::Yellow);
    }

    public function violet(): static
    {
        return $this->color(Color::Violet);
    }

    public function grey(): static
    {
        return $this->color(Color::Grey);
    }

    public function black(): static
    {
        return $this->color(Color::Black);
    }

    public function gold(): static
    {
        return $this->color(Color::Gold);
    }

    public function randomColor(): static
    {
        $colors = Color::cases();
        $randomColor = $colors[array_rand($colors)];
        return $this->color($randomColor);
    }

    public function opacity(Closure|float $opacity)
    {
        $this->opacity = $this->evaluate($opacity);
        return $this;
    }

    /*
    |--------------------------------------------------------------------------
    | Getters
    |--------------------------------------------------------------------------
    */

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function getOpacity(): float
    {
        return $this->opacity;
    }

    public function getHexColor(): ?string
    {
        if (!$this->color) return null;
        return Color::from($this->color)->hex();
    }
}
