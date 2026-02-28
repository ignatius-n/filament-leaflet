<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Enums;

use Filament\Support\Colors\Color as FilamentColor;

/** @deprecated use \Filament\Support\Colors\Color instead. */
class Color extends FilamentColor
{
    public const Black = [
        50 => 'oklch(0.985 0 0)',
        100 => 'oklch(0.97 0 0)',
        200 => 'oklch(0.922 0 0)',
        300 => 'oklch(0.87 0 0)',
        400 => 'oklch(0.708 0 0)',
        500 => 'oklch(0.556 0 0)',
        600 => 'oklch(0.439 0 0)',
        700 => 'oklch(0.371 0 0)',
        800 => 'oklch(0.269 0 0)',
        900 => 'oklch(0.205 0 0)',
        950 => 'oklch(0.145 0 0)',
    ];

    public const Gold = [
        50 => 'oklch(0.987 0.022 95.277)',
        100 => 'oklch(0.962 0.059 95.617)',
        200 => 'oklch(0.924 0.12 95.746)',
        300 => 'oklch(0.879 0.169 91.605)',
        400 => 'oklch(0.828 0.189 84.429)',
        500 => 'oklch(0.769 0.188 70.08)',
        600 => 'oklch(0.666 0.179 58.318)',
        700 => 'oklch(0.555 0.163 48.998)',
        800 => 'oklch(0.473 0.137 46.201)',
        900 => 'oklch(0.414 0.112 45.904)',
        950 => 'oklch(0.279 0.077 45.635)',
    ];
}
