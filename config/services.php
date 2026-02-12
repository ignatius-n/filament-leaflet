<?php

return [
    'mapbox' => [
        'token' => env('MAPBOX_ACCESS_TOKEN'),
        'tile_size' => env('MAPBOX_TILE_SIZE', 512),
    ],

];
