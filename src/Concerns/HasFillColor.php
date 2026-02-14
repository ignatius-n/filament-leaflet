<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Concerns;

use Closure;
use EduardoRibeiroDev\FilamentLeaflet\Enums\Color;

trait HasFillColor
{
    protected ?string $fillColor = null;
    protected float $fillOpacity = 1;

    public function fillColor(null|string|Closure|Color $color): static
    {
        $newColor = $this->evaluate($color);

        if (is_null($newColor)) {
            $this->fillColor = null;
            return $this;
        }

        $this->fillColor = $newColor instanceof Color
            ? $newColor->value
            : Color::from($newColor)->value;

        return $this;
    }

    /*
    |--------------------------------------------------------------------------
    | Convenience Methods
    |--------------------------------------------------------------------------
    */

    public function fillBlue(): static
    {
        return $this->fillColor(Color::Blue);
    }

    public function fillRed(): static
    {
        return $this->fillColor(Color::Red);
    }

    public function fillGreen(): static
    {
        return $this->fillColor(Color::Green);
    }

    public function fillOrange(): static
    {
        return $this->fillColor(Color::Orange);
    }

    public function fillYellow(): static
    {
        return $this->fillColor(Color::Yellow);
    }

    public function fillViolet(): static
    {
        return $this->fillColor(Color::Violet);
    }

    public function fillGrey(): static
    {
        return $this->fillColor(Color::Grey);
    }

    public function fillBlack(): static
    {
        return $this->fillColor(Color::Black);
    }

    public function fillGold(): static
    {
        return $this->fillColor(Color::Gold);
    }

    public function fillRandomColor(): static
    {
        $colors = Color::cases();
        $randomColor = $colors[array_rand($colors)];
        return $this->fillColor($randomColor);
    }

    public function fillOpacity(Closure|float $opacity)
    {
        $this->fillOpacity = $this->evaluate($opacity);
        return $this;
    }

    /*
    |--------------------------------------------------------------------------
    | Getters
    |--------------------------------------------------------------------------
    */

    public function getFillColor(): ?string
    {
        return $this->fillColor;
    }

    public function getFillOpacity(): float
    {
        return $this->fillOpacity;
    }

    public function getHexFillColor(): ?string
    {
        if (!$this->fillColor) return null;
        return Color::from($this->fillColor)->hex();
    }
}
