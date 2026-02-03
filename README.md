# Filament Leaflet

A powerful and elegant Leaflet integration for Filament PHP that makes creating interactive maps a breeze. Build beautiful, feature-rich maps with markers, clusters, shapes, and more using a fluent, expressive API.

## Features

- 🗺️ **Interactive Maps** - Full Leaflet integration with customizable tile layers
- 📍 **Markers & Clusters** - Beautiful markers with popup/tooltip support and intelligent clustering
- 🎨 **Shapes** - Circles, polygons, polylines, rectangles, and circle markers
- 🎯 **Click Events** - Handle clicks on markers, shapes, and the map itself
- 📊 **GeoJSON Support** - Display density maps with custom color schemes
- 🔄 **Model Binding** - Automatically create markers from Eloquent models
- 🎨 **Multiple Tile Layers** - Switch between OpenStreetMap, Satellite, and custom layers
- 💾 **CRUD Operations** - Create markers directly from map clicks
- 🎭 **Customizable** - Extensive configuration options for every element

## What's New

- 🧩 **Form Field: MapPicker** — a brand new Filament form field that lets you pick coordinates directly inside a form. It supports methods like `center()`, `height()`, `zoom()`, `tileLayersUrl()`, `geoJsonData()`, `markers()` and automatically syncs latitude/longitude values with the form state.
- 🧭 **Model GeoJSON Files** — new `HasGeoJsonFile` trait and `getGeoJsonUrl()` on models. When a record exposes a GeoJSON file/attribute, `MapPicker` will automatically load it (including temporary URLs when using storage disks). Configure attribute name, disk and expiration via the trait's properties.
- 🔗 **Filament Schemas Integration** — when the map is used inside a schema/component (e.g., fields, components) the frontend will call the exposed Livewire methods `handleMapClick` and `handleLayerClick` on the component (via `ExposedLivewireMethod`). This makes handling map and layer clicks easy from the parent component.
- 🗂️ **Layer Group Improvements** — `FeatureGroup` now automatically generates a `Polygon` that envelopes the group's points (useful for visualizing areas). New style helpers: `weight()`, `opacity()`, `fillOpacity()`, `dashArray()`.
- ✏️ **Editable Layers & Draw Control** — improvements to the draw control and consistent support for editable layers (editable groups are now managed correctly on the frontend).
- 🎨 **Better Color & Options Control** — the `HasColor`, `HasFillColor` and `HasOptions` concerns unify the API for colors, fills and visual options (`->blue()`, `->fillBlue()`, `->option()`, etc.).
- 🧭 **UX: Pick Marker** — when clicking the map inside a form, a temporary marker is shown to give visual feedback for the selected point.
- 🎨 **Centralized Styles** — map styles were moved to `resources/css/index.css` and are automatically loaded by the JS component.

See the sections below for usage examples.

## Installation

```bash
composer require eduardoribeirodev/filament-leaflet
```

Publish the assets:

```bash
php artisan filament:assets
```

This will publish the Leaflet assets used by the package — the distribution now includes draw toolbar, marker cluster control, fullscreen control and geosearch toolbar assets.

## Table of Contents

- [Getting Started](#getting-started)
  - [Quick Start](#quick-start)
  - [Form Field: MapPicker](#form-field-mappicker)
  - [Map Widget Configuration](#map-widget-configuration)
- [Map Elements](#map-elements)
  - [Working with Markers](#working-with-markers)
  - [Layer Groups](#layer-groups)
  - [Shapes](#shapes)
  - [Editable Layers](#editable-layers)
- [User Interaction](#user-interaction)
  - [Popups and Tooltips](#popups-and-tooltips)
  - [Click Actions](#click-actions)
- [Advanced Features](#advanced-features)
  - [Model Integration](#model-integration)
  - [GeoJSON Density Maps](#geojson-density-maps)
  - [Advanced Configuration](#advanced-configuration)
  - [Multi-Language Support](#multi-language-support)
- [API Reference](#api-reference)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Quick Start

Create your first map widget:

```php
namespace App\Filament\Widgets;

use EduardoRibeiroDev\FilamentLeaflet\Widgets\MapWidget;
use EduardoRibeiroDev\FilamentLeaflet\Support\Markers\Marker;

class MyMapWidget extends MapWidget
{
    protected static ?string $heading = 'My Locations';
    
    protected static array $mapCenter = [-23.5505, -46.6333]; // São Paulo
    protected static int $defaultZoom = 12;
    
    protected function getMarkers(): array
    {
        return [
            Marker::make(-23.5505, -46.6333)
                ->title('São Paulo')
                ->popupContent('The largest city in Brazil'),
        ];
    }
}
```

#### Form Field: MapPicker

Use the `MapPicker` field to add an interactive map inside Filament forms. It syncs map clicks to the form state (latitude/longitude fields) and supports configuration options similar to `MapWidget`.

```php
use EduardoRibeiroDev\FilamentLeaflet\Fields\MapPicker;
use EduardoRibeiroDev\FilamentLeaflet\Support\Markers\Marker;
use EduardoRibeiroDev\FilamentLeaflet\Enums\TileLayer;

MapPicker::make('location')
    ->height(300)
    ->center(-23.5505, -46.6333)
    ->zoom(11)
    ->tileLayersUrl(TileLayer::OpenStreetMap)
    ->markers([
        Marker::make(-23.5505, -46.6333)->title('Store 1'),
    ])
    ->geoJsonData(['SP' => 166.23])
    ->geoJsonTooltip('<h4>{state}</h4><b>Density: {density}</b>')
```

By default, `MapPicker` updates the form's `latitude` and `longitude` fields. Customize the field names with `latitudeFieldName()` and `longitudeFieldName()`.

Loading GeoJSON from model files

If your model exposes a GeoJSON file or URL (for example by using the provided `HasGeoJsonFile` concern or by implementing a `getGeoJsonUrl()` method), `MapPicker` will automatically call `getGeoJsonUrl()` on the record and load the GeoJSON into the map when the field is mounted. The `HasGeoJsonFile` trait helps with common patterns (attribute name, storage disk and temporary URL expiration).

Example model using the trait:

```php
use EduardoRibeiroDev\FilamentLeaflet\Concerns\HasGeoJsonFile;

class DeliveryZone extends Model
{
    use HasGeoJsonFile;

    // Optional: override defaults
    protected string $geoJsonFileAttribute = 'geojson';
    protected ?string $geoJsonFileDisk = 's3';
    protected ?int $expirationMinutes = 60;
}
```

Note: Many `MapPicker` setter methods accept `Closure`s for dynamic evaluation (e.g., `->center(fn() => [$lat, $lng])`, `->geoJsonUrl(fn() => $someUrl)`).

#### Using Closures for Dynamic Configuration

The `MapPicker` field supports `Closure`s in most configuration methods. These are evaluated by Filament's `evaluate()` method, allowing you to access the current record and other context dynamically:

```php
use EduardoRibeiroDev\FilamentLeaflet\Fields\MapPicker;
use EduardoRibeiroDev\FilamentLeaflet\Support\Markers\Marker;
use EduardoRibeiroDev\FilamentLeaflet\Enums\TileLayer;

MapPicker::make('location')
    // Dynamic height based on screen or state
    ->height(fn($record) => $record?->is_large_zone ? 500 : 300)
    
    // Center on the record's existing coordinates
    ->center(fn($record) => [
        $record?->latitude ?? -23.5505,
        $record?->longitude ?? -46.6333
    ])
    
    // Dynamic zoom based on record properties
    ->zoom(fn($record) => $record?->coverage_type === 'city' ? 11 : 6)
    
    // Load tile layer based on user preference
    ->tileLayersUrl(fn() => auth()->user()?->map_tile_preference ?? TileLayer::OpenStreetMap)
    
    // Load markers based on record relationships
    ->markers(fn($record) => 
        $record?->warehouses->map(fn($warehouse) => 
            Marker::make($warehouse->latitude, $warehouse->longitude)
                ->title($warehouse->name)
                ->blue()
        )->toArray() ?? []
    )

    // Load shapes conditionally based on user permissions
    ->shapes(fn($record) => 
        auth()->user()?->can('view_restricted_zones')
            ? $record?->getRestrictedZones()
            : $record?->getPublicZones() ?? []
    );

    // Dynamic GeoJSON URL based on region type
    ->geoJsonUrl(fn($get) => 
        match($get('region_type')) {
            'states' => 'https://cdn.example.com/states.geojson',
            'cities' => 'https://cdn.example.com/cities.geojson',
            default => null,
        }
    );
```

### Map Widget Configuration

#### Basic Settings

Configure your map's initial state and behavior:

```php
class MyMapWidget extends MapWidget
{
    // Map heading
    protected static ?string $heading = 'Store Locations';
    
    // Center coordinates [latitude, longitude]
    protected static array $mapCenter = [-14.235, -51.9253];
    
    // Initial zoom level (1-18)
    protected static int $defaultZoom = 4;
    
    // Map height in pixels
    protected static int $mapHeight = 600;
    
    // Zoom configuration
    protected static int $maxZoom = 18;
    protected static int $minZoom = 2;
}
```

### Map Controls

You can enable or disable UI controls individually using the widget flags. Use the provided toggles to show controls:

- `hasAttributionControl`: show/hide the attribution control
- `hasScaleControl`: show/hide the scale control
- `hasZoomControl`: show/hide the zoom control
- `hasFullscreenControl`: show/hide the fullscreen control
- `hasSearchControl`: show/hide the search control
 - `hasDrawControl`: enable/disable the draw toolbar control

Examples

- Enable controls from the widget class:

```php
class MyMapWidget extends MapWidget
{
    protected static bool $hasAttributionControl = false;
    protected static bool $hasScaleControl = true;
    protected static bool $hasZoomControl = true;
    protected static bool $hasFullscreenControl = true;
    protected static bool $hasDrawControl = true;
    protected static bool $hasSearchControl = true;
}
```

- Conditionally toggle controls per runtime using `getMapControls()` override. This is useful when you want control visibility to depend on user permissions or widget state:

```php
public static function getMapControls(): array
{
    $controls = parent::getMapControls();

    // Example: hide fullscreen for non-admins
    if (!auth()?->user()?->is_admin) {
        $controls['fullscreenControl'] = false;
    }

    return $controls;
}
```

### Tile Layers

Tile layers can be provided as a single `TileLayer` enum, a plain URL string, or an array of layers. When using an associative array you may provide custom labels for the layer selector. If a `TileLayer` enum is used the widget will also include the provider attribution automatically.

Choose from multiple tile layer providers or add your own:

```php
use EduardoRibeiroDev\FilamentLeaflet\Enums\TileLayer;

class MyMapWidget extends MapWidget
{
    // Single layer
    protected static TileLayer|string|array $tileLayersUrl = TileLayer::OpenStreetMap;
    
    // Multiple layers
    protected static TileLayer|string|array $tileLayersUrl = [
        TileLayer::OpenStreetMap,
        TileLayer::GoogleSatellite,
        TileLayer::EsriNatGeo,
    ];
    
    // Multiple layers with custom names
    protected static TileLayer|string|array $tileLayersUrl = [
        'Street Map' => TileLayer::OpenStreetMap,
        'Satellite' => TileLayer::EsriWorldStreetMap,
        'Terrain' => TileLayer::GoogleTerrain,
    ];
    
    // Custom tile server
    protected static TileLayer|string|array $tileLayersUrl = [
        'Custom' => 'https://{s}.tile.custom.com/{z}/{x}/{y}.png',
    ];
}
```

Available tile layers:
- `TileLayer::OpenStreetMap`
- `TileLayer::GoogleStreets`
- `TileLayer::GoogleSatellite`
- `TileLayer::GoogleHybrid`
- `TileLayer::GoogleTerrain`
- `TileLayer::EsriWorldImagery`
- `TileLayer::EsriWorldStreetMap`
- `TileLayer::EsriNatGeo`
- `TileLayer::CartoPositron`
- `TileLayer::CartoDarkMatter`

## Map Elements

### Working with Markers

#### Basic Markers

Create markers with various configurations:

```php
use EduardoRibeiroDev\FilamentLeaflet\Support\Markers\Marker;
use EduardoRibeiroDev\FilamentLeaflet\Enums\Color;

protected function getMarkers(): array
{
    return [
        // Simple marker
        Marker::make(-23.5505, -46.6333),
        
        // Marker with title (shows as tooltip and popup title)
        Marker::make(-23.5505, -46.6333)
            ->title('São Paulo'),
        
        // Colored marker
        Marker::make(-23.5505, -46.6333)
            ->blue(), // or ->color(Color::Blue)
        
        // Custom icon
        Marker::make(-23.5505, -46.6333)
            ->icon('https://example.com/icon.png', [32, 32]),
        
        // Draggable marker
        Marker::make(-23.5505, -46.6333)
            ->draggable(),
        
        // Complete marker
        Marker::make(-23.5505, -46.6333)
            ->id('sao-paulo')
            ->title('São Paulo')
            ->red()
            ->popupContent('The largest city in Brazil')
            ->group('cities'),
    ];
}
```

#### Marker Colors

Use the built-in color system:

```php
Marker::make($lat, $lng)
    ->blue()      // Blue marker
    ->red()       // Red marker
    ->green()     // Green marker
    ->orange()    // Orange marker
    ->yellow()    // Yellow marker
    ->violet()    // Violet marker
    ->grey()      // Grey marker
    ->black()     // Black marker
    ->gold()      // Gold marker
    ->randomColor(); // Random color

// Or use the Color enum
Marker::make($lat, $lng)
    ->color(Color::Blue);
```

#### Markers from Eloquent Models

Automatically create markers from your database records:

```php
use App\Models\Store;

protected function getMarkers(): array
{
    return Store::all()->map(function ($store) {
        return Marker::fromRecord(
            record: $store,
            latColumn: 'latitude',
            lngColumn: 'longitude',
            titleColumn: 'name',
            descriptionColumn: 'description',
            popupFieldsColumns: ['address', 'phone', 'email'],
            color: Color::Blue,
        );
    })->toArray();
}
```

##### JSON Coordinate Storage

If your coordinates are stored as JSON:

```php
// Database structure: coordinates => {"lat": -23.5505, "lng": -46.6333}

Marker::fromRecord(
    record: $store,
    jsonColumn: 'coordinates',      // Column containing JSON
    latColumn: 'lat',               // Key in JSON object
    lngColumn: 'lng',               // Key in JSON object
    titleColumn: 'name',
);
```

##### Customizing Markers from Records

Use the `mapRecordCallback` to customize each marker:

```php
Marker::fromRecord(
    record: $store,
    latColumn: 'latitude',
    lngColumn: 'longitude',
    mapRecordCallback: function (Marker $marker, Model $record) {
        // Customize based on record data
        if ($record->is_featured) {
            $marker->gold();
        }
        
        if ($record->status === 'closed') {
            $marker->grey();
        }
        
        // Add custom popup fields
        $marker->popupFields([
            'opening_hours' => $record->hours,
            'rating' => $record->rating . ' ⭐',
        ]);
    }
);
```

### Layer Groups

Layer groups are a powerful way to organize and manage multiple layers on your map. They allow you to:

- **Toggle visibility** - Show/hide entire groups of layers at once
- **Organize layers** - Group related markers and shapes together
- **Improve performance** - Manage large datasets efficiently
- **Control layer management** - Add/remove layers from groups dynamically

#### Layer Group

A simple container for organizing related layers. Perfect for grouping logically related markers and shapes without any automatic behavior:

```php
use EduardoRibeiroDev\FilamentLeaflet\Support\Groups\LayerGroup;

protected function getMarkers(): array
{
    return [
        LayerGroup::make([
            Marker::make(-23.5505, -46.6333)->title('Store 1'),
            Marker::make(-23.5515, -46.6343)->title('Store 2'),
            Marker::make(-23.5525, -46.6353)->title('Store 3'),
        ])
        ->name('Active Stores')
        ->id('active-stores'),
    ];
}
```

**Using the `group()` helper method (shorthand):**

Instead of wrapping layers in `LayerGroup::make()`, you can use the `group()` method on any layer to automatically group multiple layers:

```php
protected function getMarkers(): array
{
    return [
        Marker::make(-23.5505, -46.6333)
            ->title('Store 1')
            ->group('Active Stores'),
        
        Marker::make(-23.5515, -46.6343)
            ->title('Store 2')
            ->group('Active Stores'),
        
        Marker::make(-23.5525, -46.6353)
            ->title('Store 3')
            ->group('Active Stores'),
    ];
}
```

The `group()` method automatically creates a LayerGroup instance for all layers with the same group name, providing a cleaner syntax when you don't need `LayerGroup::make()` complexity.

**Advanced example with mixed layers:**

```php
LayerGroup::make([
    // Markers
    Marker::make(-23.5505, -46.6333)->title('Store 1')->blue(),
    Marker::make(-23.5515, -46.6343)->title('Store 2')->blue(),
    
    // Shapes
    Circle::make(-23.5505, -46.6333)
        ->radiusInKilometers(5)
        ->blue()
        ->fillOpacity(0.1),
    
    // Popups and tooltips work on all layers
])
->name('Store Coverage')
->id('store-coverage-group');
```

#### Feature Group

Creates a polygon envelope around all layers in the group. This is useful for visualizing the coverage area or boundary of a set of points:

```php
use EduardoRibeiroDev\FilamentLeaflet\Support\Groups\FeatureGroup;

protected function getMarkers(): array
{
    return [
        FeatureGroup::make([
            Marker::make(-23.5505, -46.6333)->title('Point 1'),
            Marker::make(-23.5515, -46.6343)->title('Point 2'),
            Marker::make(-23.5525, -46.6323)->title('Point 3'),
        ])
        ->name('Delivery Zone')
        ->blue()
        ->fillBlue()
        ->fillOpacity(0.2)
        ->weight(2)
        ->dashArray('5, 10'),
    ];
}
```

**Real-world example with custom styling:**

```php
FeatureGroup::make([
    Marker::make(-23.5505, -46.6333)->title('Warehouse A'),
    Marker::make(-23.5615, -46.6443)->title('Warehouse B'),
    Marker::make(-23.5425, -46.6223)->title('Warehouse C'),
])
->name('Supply Chain Network')
->id('supply-chain')
->orange()          // Border color
->fillColor(Color::Yellow)  // Fill color
->fillOpacity(0.15) // Semi-transparent fill
->weight(3)         // Thicker border
->opacity(0.8);
```

**Feature groups with event handlers:**

```php
FeatureGroup::make($warehouseMarkers)
    ->name('Warehouses')
    ->green()
    ->action(function (FeatureGroup $group) {
        Notification::make()
            ->title('Warehouse Zone Clicked')
            ->body('This is the warehouse coverage area')
            ->send();
    });
```

#### Marker Cluster

Groups nearby markers into clusters for better performance and visual clarity, especially with large datasets. Clusters automatically expand when zooming in:

```php
use EduardoRibeiroDev\FilamentLeaflet\Support\Groups\MarkerCluster;

protected function getMarkers(): array
{
    return [
        MarkerCluster::make([
            Marker::make(-23.5505, -46.6333)->title('Location 1'),
            Marker::make(-23.5515, -46.6343)->title('Location 2'),
            Marker::make(-23.5525, -46.6353)->title('Location 3'),
        ])
        ->blue()
        ->maxClusterRadius(80)
        ->showCoverageOnHover()
        ->spiderfyOnMaxZoom(),
    ];
}
```

**Cluster from Model:**

Create clusters directly from Eloquent models with powerful customization:

```php
use App\Models\Store;

protected function getMarkers(): array
{
    return [
        MarkerCluster::fromModel(
            model: Store::class,
            latColumn: 'latitude',
            lngColumn: 'longitude',
            titleColumn: 'name',
            descriptionColumn: 'description',
            popupFieldsColumns: ['address', 'phone'],
            color: Color::Green,
        )
        ->maxClusterRadius(60)
        ->disableClusteringAtZoom(15),
    ];
}
```

**Cluster with Query Modification:**

Filter and customize the query used to load markers:

```php
MarkerCluster::fromModel(
    model: Store::class,
    latColumn: 'latitude',
    lngColumn: 'longitude',
    modifyQueryCallback: function ($query) {
        return $query
            ->where('status', 'active')
            ->where('city', 'São Paulo')
            ->orderBy('name');
    },
    mapRecordCallback: function (Marker $marker, Model $record) {
        // Customize each marker based on record properties
        if ($record->isPremium()) {
            $marker->gold()->icon('/images/premium-icon.png');
        }
        
        // Add status-based styling
        match($record->status) {
            'open' => $marker->green(),
            'busy' => $marker->orange(),
            'closed' => $marker->red(),
            default => $marker->grey(),
        };
        
        // Add popup with custom fields
        $marker->popupFields([
            'manager' => $record->manager_name,
            'staff' => $record->staff_count . ' employees',
            'rating' => $record->rating . ' ⭐',
        ]);
    }
);
```

**Advanced cluster configuration:**

```php
MarkerCluster::make($markers)
    ->maxClusterRadius(80)              // Cluster radius in pixels
    ->showCoverageOnHover(true)         // Highlight cluster area on hover
    ->zoomToBoundsOnClick(true)         // Zoom to cluster bounds when clicked
    ->spiderfyOnMaxZoom(true)           // Spread markers at max zoom
    ->removeOutsideVisibleBounds(true)  // Remove markers outside viewport for performance
    ->disableClusteringAtZoom(15)       // Stop clustering at zoom level 15+
    ->animate(true)                     // Animate cluster changes
    ->options([                         // Custom Leaflet options
        'maxClusterRadius' => 100,
        'animateAddingMarkers' => true,
    ]);
```

#### Combining Multiple Layer Groups

You can combine different layer groups in the same map to create complex, multi-layered visualizations:

```php
use App\Models\Store;
use App\Models\Warehouse;
use App\Models\Partner;

protected function getLayers(): array
{
    return [
        // Group 1: Stores with clustering
        MarkerCluster::fromModel(
            model: Store::class,
            latColumn: 'latitude',
            lngColumn: 'longitude',
            titleColumn: 'name',
            color: Color::Blue,
        )
        ->name('Retail Stores')
        ->maxClusterRadius(80),
        
        // Group 2: Warehouses with feature group
        FeatureGroup::make([
            Warehouse::all()->map(fn($w) => 
                Marker::make($w->latitude, $w->longitude)
                    ->title($w->name)
                    ->red()
            )->all()
        ])
        ->name('Warehouses')
        ->orange()
        ->fillOpacity(0.1),
        
        // Group 3: Partners as simple layer group
        LayerGroup::make([
            Partner::active()->get()->map(fn($p) => 
                Marker::make($p->latitude, $p->longitude)
                    ->title($p->company_name)
                    ->green()
                    ->popupFields([
                        'contact' => $p->contact_name,
                        'phone' => $p->phone,
                    ])
            )->all()
        ])
        ->name('Partner Locations')
        ->id('partners-group'),
        
        // Group 4: Service areas with shapes
        LayerGroup::make([
            Circle::make(-23.5505, -46.6333)
                ->radiusInKilometers(25)
                ->blue()
                ->fillBlue()
                ->fillOpacity(0.05)
                ->popupContent('Primary service area'),
            
            Circle::make(-23.5505, -46.6333)
                ->radiusInKilometers(50)
                ->blue()
                ->dashArray('5, 5')
                ->fillOpacity(0)
                ->popupContent('Extended service area'),
        ])
        ->name('Service Areas')
        ->id('service-areas'),
    ];
}
```

This example demonstrates:
- **Clustering** for high-volume data (stores)
- **Feature groups** for geographic boundaries (warehouse coverage)
- **Simple groups** for categorical data (partners)
- **Shape combinations** for visualizing service areas

**Toggling visibility in the UI:**

Layer groups automatically appear in the Leaflet controls when a name is set, allowing users to toggle them on/off from the map interface.

### Shapes

Draw various geometric shapes on your map:

#### Circles

Circles with radius in various units:

```php
use EduardoRibeiroDev\FilamentLeaflet\Support\Shapes\Circle;

protected function getShapes(): array
{
    return [
        // Radius in meters (default)
        Circle::make(-23.5505, -46.6333)
            ->radius(5000)
            ->blue()
            ->fillBlue()
            ->title('Coverage Area'),
        
        // Radius in kilometers
        Circle::make(-23.5505, -46.6333)
            ->radiusInKilometers(5)
            ->red()
            ->fillOpacity(0.3),
        
        // Radius in miles
        Circle::make(-23.5505, -46.6333)
            ->radiusInMiles(3)
            ->green(),
        
        // Radius in feet
        Circle::make(-23.5505, -46.6333)
            ->radiusInFeet(10000)
            ->orange(),
        
        // Styled circle
        Circle::make(-23.5505, -46.6333)
            ->radiusInKilometers(10)
            ->color(Color::Blue)      // Border color
            ->fillColor(Color::Blue)  // Fill color
            ->weight(3)               // Border width
            ->opacity(0.8)            // Border opacity
            ->fillOpacity(0.2)        // Fill opacity
            ->dashArray('5, 10')      // Dashed border
            ->popupContent('10km radius coverage'),
    ];
}
```

#### Circle Markers

Small circles with pixel-based radius (like markers but circular):

```php
use EduardoRibeiroDev\FilamentLeaflet\Support\Shapes\CircleMarker;

CircleMarker::make(-23.5505, -46.6333)
    ->radius(15)           // Radius in pixels
    ->red()
    ->fillRed()
    ->weight(2)
    ->title('Point of Interest');
```

#### Polygons

Draw custom polygons:

```php
use EduardoRibeiroDev\FilamentLeaflet\Support\Shapes\Polygon;

// Define a polygon area
Polygon::make([
    [-23.5505, -46.6333],
    [-23.5515, -46.6343],
    [-23.5525, -46.6323],
    [-23.5505, -46.6333], // Close the polygon
])
->green()
->fillGreen()
->fillOpacity(0.3)
->title('Delivery Zone')
->popupContent('We deliver to this area');

// Or build point by point
Polygon::make()
    ->addPoint(-23.5505, -46.6333)
    ->addPoint(-23.5515, -46.6343)
    ->addPoint(-23.5525, -46.6323)
    ->addPoint(-23.5505, -46.6333)
    ->blue();
```

#### Polylines

Draw lines connecting multiple points:

```php
use EduardoRibeiroDev\FilamentLeaflet\Support\Shapes\Polyline;

// Route or path
Polyline::make([
    [-23.5505, -46.6333],
    [-23.5515, -46.6343],
    [-23.5525, -46.6353],
    [-23.5535, -46.6363],
])
->blue()
->weight(4)
->opacity(0.7)
->dashArray('10, 5')      // Dashed line
->smoothFactor(1.5)       // Smooth curves
->title('Delivery Route');

// Or build incrementally
Polyline::make()
    ->addPoint(-23.5505, -46.6333)
    ->addPoint(-23.5515, -46.6343)
    ->addPoint(-23.5525, -46.6353)
    ->red()
    ->weight(3);
```

#### Rectangles

Draw rectangular bounds:

```php
use EduardoRibeiroDev\FilamentLeaflet\Support\Shapes\Rectangle;

// Using corner coordinates
Rectangle::make(
    [-23.5505, -46.6333],  // Southwest corner
    [-23.5525, -46.6353]   // Northeast corner
)
->orange()
->fillOrange()
->fillOpacity(0.2)
->title('Restricted Area');

// Alternative syntax
Rectangle::makeFromCoordinates(
    -23.5505, -46.6333,    // Southwest lat, lng
    -23.5525, -46.6353     // Northeast lat, lng
)
->red();
```

#### Shape Styling
```php
Circle::make(-23.5505, -46.6333)
    ->radius(5000)
    
    // Border styling
    ->color(Color::Blue)        // Border color
    ->weight(3)                 // Border width in pixels
    ->opacity(0.8)              // Border opacity (0-1)
    ->dashArray('5, 10')        // Dashed border pattern
    
    // Fill styling
    ->fillColor(Color::Green)   // Fill color
    ->fillOpacity(0.3)          // Fill opacity (0-1)
    
    // Custom options
    ->options([
        'className' => 'custom-shape',
        'interactive' => true,
    ]);
```

### Editable Layers

Make markers and shapes editable directly on the map by enabling the draw control:

```php
class MyMapWidget extends MapWidget
{
    protected static bool $hasDrawControl = true;
    
    protected function getMarkers(): array
    {
        return [
            Marker::make(-23.5505, -46.6333)
                ->title('Editable Marker')
                ->editable(),  // Make this marker editable
            
            Circle::make(-23.5505, -46.6333)
                ->radiusInKilometers(5)
                ->editable(),  // Make this circle editable
        ];
    }
}
```

You can also make all layers in a group editable:

```php
LayerGroup::make([
    Marker::make(-23.5505, -46.6333)->title('Point 1'),
    Marker::make(-23.5515, -46.6343)->title('Point 2'),
    Marker::make(-23.5525, -46.6353)->title('Point 3'),
])
->name('Editable Points')
->editable(),  // All markers in the group are now editable
```

## User Interaction

### Popups and Tooltips

### Tooltips

Tooltips appear on hover:

```php
Marker::make(-23.5505, -46.6333)
    ->tooltip(
        content: 'São Paulo City',
        permanent: false,           // Always visible
        direction: 'top',           // 'top', 'bottom', 'left', 'right', 'auto'
        options: [
            'offset' => [0, -20],
            'className' => 'custom-tooltip',
        ]
    );

// Or use individual methods
Marker::make(-23.5505, -46.6333)
    ->tooltipContent('São Paulo')
    ->tooltipPermanent(true)
    ->tooltipDirection('top')
    ->tooltipOptions(['opacity' => 0.9]);
```

#### Popups

Popups appear on click and support rich content:

```php
Marker::make(-23.5505, -46.6333)
    ->popupTitle('Store Location')
    ->popupContent('Visit our main store in downtown São Paulo')
    ->popupFields([
        'address' => '123 Main Street',
        'phone' => '+55 11 1234-5678',
        'email' => 'contact@store.com',
        'opening_hours' => 'Mon-Fri: 9AM-6PM',
    ])
    ->popupOptions([
        'maxWidth' => 300,
        'className' => 'custom-popup',
    ]);

// Or use the shorthand
Marker::make(-23.5505, -46.6333)
    ->popup(
        content: 'Store description',
        fields: [
            'address' => '123 Main Street',
            'phone' => '+55 11 1234-5678',
        ],
        options: ['maxWidth' => 300]
    );
```

#### How Popup Fields Work

The `popupFields()` method automatically formats your data into a clean, structured display:

```php
Marker::make(-23.5505, -46.6333)
    ->popupFields([
        'store' => 'Pizza Palace',
        'phone_number' => '+55 11 1234-5678',
        'opening_hours' => '10AM - 10PM',
    ]);
```

This generates HTML like:
```html
<p><span class="field-label">Store:</span> Pizza Palace</p>
<p><span class="field-label">Phone Number:</span> +55 11 1234-5678</p>
<p><span class="field-label">Opening Hours:</span> 10AM - 10PM</p>
```

The keys are automatically:
- Converted to title case
- Underscores replaced with spaces
- Translated using Laravel's `__()` helper

Both keys and values are translated, so you can use translation keys:

```php
->popupFields([
    'store.name' => $store->name,
    'store.contact' => $store->phone,
])
```

#### Combining Title, Tooltip, and Popup

```php
Marker::make(-23.5505, -46.6333)
    ->title('Pizza Palace')              // Sets both tooltip and popup title
    ->popupContent('Best pizza in town')
    ->popupFields([
        'address' => '123 Main St',
        'phone' => '+55 11 1234-5678',
        'rating' => '4.5 ⭐',
    ]);
```

### Click Actions

Handle user interactions with layers:

### Marker Click Actions

```php
use Filament\Notifications\Notification;

Marker::make(-23.5505, -46.6333)
    ->title('Interactive Marker')
    ->onClick(function (Marker $marker) {
        Notification::make()
            ->title('Marker Clicked!')
            ->body('You clicked on: ' . $marker->getId())
            ->success()
            ->send();
    });

// Or use the action() method
Marker::make(-23.5505, -46.6333)
    ->action(function (Marker $marker) {
        // Handle click
    });
```

### Shape Click Actions

```php
Circle::make(-23.5505, -46.6333)
    ->radius(5000)
    ->action(function (Circle $circle) {
        Notification::make()
            ->title('Circle clicked')
            ->send();
    });

Polygon::make($coordinates)
    ->action(function (Polygon $polygon) {
        // Handle polygon click
    });
```

### Access Record in Click Actions

When using markers from models, access the record in click actions:

```php
protected function getMarkers(): array
{
    return Store::all()->map(function ($store) {
        return Marker::fromRecord(
            record: $store,
            latColumn: 'latitude',
            lngColumn: 'longitude',
        )->action(function (Marker $marker, Store $record) {
            Notification::make()
                ->title("You clicked: {$record->name}")
                ->body("Address: {$record->address}")
                ->send();
            
            // You can also redirect
            return redirect()->route('stores.show', $record);
        });
    })->toArray();
}
```

### Map Click Handler

Handle clicks on the map itself:

```php
public function handleMapClick(float $latitude, float $longitude): void
{
    Notification::make()
        ->title('Map clicked')
        ->body("Coordinates: {$latitude}, {$longitude}")
        ->send();

    // Or create a new marker dynamically via the widget create flow
    parent::handleMapClick($latitude, $longitude);
}
```

## Advanced Features

### Model Integration

> Tip: To expose GeoJSON files from your models (for widgets or the `MapPicker` field), you can use the `HasGeoJsonFile` concern or implement a `getGeoJsonUrl()` method on the model. The concern helps with attribute name, storage disk and temporary URL expiration.

#### CRUD Operations

Enable creating markers directly from map clicks:

```php
use App\Models\Location;

class LocationMapWidget extends MapWidget
{
    protected static ?string $markerModel = Location::class;
    
    // Column names in your database
    protected static string $latitudeColumnName = 'latitude';
    protected static string $longitudeColumnName = 'longitude';
    
    // For JSON storage
    protected static ?string $jsonCoordinatesColumnName = 'coordinates';
    
    // Form configuration
    protected static int $formColumns = 2;
    
    protected static function getFormComponents(): array
    {
        return [
            TextInput::make('name')
                ->required(),
            
            Select::make('color')
                ->options(Color::class),
            
            Textarea::make('description')
                ->columnSpanFull(),
        ];
    }
}
```

Notes:

- You can set `protected static ?string $markerResource = YourResource::class;` to reuse an existing Filament Resource form instead of the widget's default form. The widget will call the resource's form builder when building the create modal.
- If the widget form schema doesn't include your latitude/longitude fields, the widget will automatically add them as `Hidden` fields so the create flow still receives coordinates from map clicks.
- If you store coordinates as a JSON column, set `protected static ?string $jsonCoordinatesColumnName = 'coordinates';` and the widget will convert the latitude/longitude into the configured JSON column before creating the record.

Now when users click the map, a form modal opens to create a new location!

##### Using a Resource Form

Integrate with existing Filament resources:

```php
use App\Filament\Resources\Locations\LocationResource;

class LocationMapWidget extends MapWidget
{
    protected static ?string $markerModel = Location::class;
    protected static ?string $markerResource = LocationResource::class;
    
    // The resource's form will be used automatically
}
```

##### After Create Hook

```php
protected function afterMarkerCreated(Model $record): void
{
    Notification::make()
        ->title('Location created!')
        ->body("Created: {$record->name}")
        ->success()
        ->send();
    
    // Send email, log activity, etc.
}
```

##### Mutate Form Data

Transform data before saving:

```php
protected function mutateFormDataBeforeCreate(array $data): array
{
    $data['user_id'] = auth()->id();
    $data['status'] = 'active';
    
    // Convert coordinates to JSON if needed
    return parent::mutateFormDataBeforeCreate($data);
}
```

##### Table Integration

Refresh the map when table actions are performed:

```php
use EduardoRibeiroDev\FilamentLeaflet\Concerns\InteractsWithMap;

class ManageLocations extends ManageRecords
{
    use InteractsWithMap;
    
    // Your resource code...
}
```

This automatically:
- Refreshes the map after create/edit/delete actions
- Keeps the map in sync with your table

### GeoJSON Density Maps

Display choropleth maps with custom density data:

```php
class BrazilDensityWidget extends MapWidget
{
    protected static ?string $geoJsonUrl = 'https://example.com/brazil-states.json';
    
    protected static array $geoJsonColors = [
        '#FED976',  // Lightest
        '#FEB24C',
        '#FD8D3C',
        '#FC4E2A',
        '#E31A1C',
        '#BD0026',
        '#800026',  // Darkest
    ];
    
    public function getGeoJsonData(): array
    {
        // Return density data for each region
        return [
            'SP' => 166.23,  // São Paulo
            'RJ' => 365.23,  // Rio de Janeiro
            'MG' => 33.41,   // Minas Gerais
            // ... more states
        ];
    }
    
    public static function getGeoJsonTooltip(): string
    {
        return <<<HTML
            <h4>{state}</h4>
            <b>Population Density: {density} per km²</b>
        HTML;
    }
}
```

The colors are automatically applied based on data distribution, creating a beautiful density visualization.

### Advanced Configuration

### Advanced Configuration

#### Custom Styles

Add custom CSS to your map:

```php
public function getCustomStyles(): string
{
    return <<<CSS
        .custom-marker {
            filter: hue-rotate(45deg);
        }
        
        .leaflet-popup-content {
            font-family: 'Inter', sans-serif;
        }
    CSS;
}
```

#### Custom Scripts

Execute JavaScript after map initialization:

```php
public function getAdditionalScripts(): string
{
    return <<<JS
        // Additional JavaScript code
        function customFunction() {
            // Your code
        }
    JS;
}
```

#### Map Options

Fine-tune Leaflet behavior:

```php
public static function getMapOptions(): array
{
    return [
        'scrollWheelZoom' => true,
        'doubleClickZoom' => true,
        'dragging' => true,
        'zoomControl' => false,
        'attributionControl' => false,
        'touchZoom' => true,
        'boxZoom' => true,
        'keyboard' => true,
    ];
}
```

Notes:

- Please, keep the `zoomControl` and `attributionControl` set as `false`. It is managed in the [Map Controls](#map-controls) section.

### Multi-Language Support

The package includes built-in support for multiple languages including:

- English (en)
- Portuguese (pt_BR, pt_PT)
- Spanish (es)
- French (fr)
- German (de)
- Italian (it)

All draw control labels, tooltips, and messages are automatically translated based on your application's locale. The package uses Laravel's translation system, so you can customize translations in your `resources/lang` directory:

```
resources/lang/
├── en/
│   └── filament-leaflet.php
├── pt_BR/
│   └── filament-leaflet.php
├── de/
│   └── filament-leaflet.php
└── ...
```

To customize translations, publish the language files:

```bash
php artisan vendor:publish --tag=filament-leaflet-translations
```

Then edit the translation files in `public/vendor/filament-leaflet/lang`.

#### Complete Example

Here's a comprehensive example combining multiple features:

```php
namespace App\Filament\Widgets;

use App\Models\Store;
use EduardoRibeiroDev\FilamentLeaflet\Widgets\MapWidget;
use EduardoRibeiroDev\FilamentLeaflet\Support\Markers\Marker;
use EduardoRibeiroDev\FilamentLeaflet\Support\Groups\MarkerCluster;
use EduardoRibeiroDev\FilamentLeaflet\Support\Shapes\Circle;
use EduardoRibeiroDev\FilamentLeaflet\Support\Shapes\Polygon;
use EduardoRibeiroDev\FilamentLeaflet\Enums\Color;
use EduardoRibeiroDev\FilamentLeaflet\Enums\TileLayer;
use Filament\Notifications\Notification;

class StoreMapWidget extends MapWidget
{
    protected static ?string $heading = 'Store Network';
    protected static array $mapCenter = [-23.5505, -46.6333];
    protected static int $defaultZoom = 11;
    protected static int $mapHeight = 700;
    
    protected static array $tileLayersUrl = [
        'Street' => TileLayer::OpenStreetMap,
        'Satellite' => TileLayer::GoogleSatellite,
    ];
    
    // Enable marker creation
    protected static ?string $markerModel = Store::class;
    protected static string $latitudeColumnName = 'latitude';
    protected static string $longitudeColumnName = 'longitude';
    
    protected function getMarkers(): array
    {
        return [
            // Clustered stores
            MarkerCluster::fromModel(
                model: Store::class,
                latColumn: 'latitude',
                lngColumn: 'longitude',
                titleColumn: 'name',
                descriptionColumn: 'description',
                popupFieldsColumns: ['address', 'phone', 'manager'],
                color: Color::Blue,
                modifyQueryCallback: fn($q) => $q->where('status', 'active'),
                mapRecordCallback: function (Marker $marker, $record) {
                    if ($record->is_flagship) {
                        $marker->gold()->icon('/images/flagship-icon.png');
                    }
                    
                    $marker->action(function (Marker $m, $r) {
                        Notification::make()
                            ->title("Store: {$r->name}")
                            ->success()
                            ->send();
                    });
                }
            )
            ->maxClusterRadius(60)
            ->spiderfyOnMaxZoom(),
            
            // Featured location
            Marker::make(-23.5505, -46.6333)
                ->title('Headquarters')
                ->red()
                ->icon('/images/hq-icon.png', [40, 40])
                ->popupContent('Our main office')
                ->popupFields([
                    'address' => 'Av. Paulista, 1000',
                    'phone' => '+55 11 1234-5678',
                    'opening_hours' => 'Mon-Fri: 9AM-6PM',
                ]),
        ];
    }
    
    protected function getShapes(): array
    {
        return [
            // Delivery radius
            Circle::make(-23.5505, -46.6333)
                ->radiusInKilometers(5)
                ->blue()
                ->fillBlue()
                ->fillOpacity(0.1)
                ->weight(2)
                ->dashArray('5, 5')
                ->popupContent('5km delivery radius'),
            
            // Exclusive zone
            Polygon::make([
                [-23.5505, -46.6333],
                [-23.5605, -46.6433],
                [-23.5705, -46.6333],
                [-23.5505, -46.6333],
            ])
            ->green()
            ->fillGreen()
            ->fillOpacity(0.2)
            ->popupContent('VIP delivery zone')
            ->action(function () {
                Notification::make()
                    ->title('VIP Zone')
                    ->body('Exclusive delivery area')
                    ->send();
            }),
        ];
    }
    
    protected static function getFormComponents(): array
    {
        return [
            TextInput::make('name')
                ->required()
                ->maxLength(255),
            
            Select::make('type')
                ->options([
                    'retail' => 'Retail Store',
                    'warehouse' => 'Warehouse',
                    'office' => 'Office',
                ])
                ->required(),
            
            Select::make('color')
                ->options(Color::class),
            
            TextInput::make('phone')
                ->tel(),
            
            Textarea::make('description')
                ->columnSpanFull()
                ->maxLength(500),
        ];
    }
    
    protected function afterMarkerCreated(Model $record): void
    {
        Notification::make()
            ->title('Store Created!')
            ->body("New store '{$record->name}' added to the map")
            ->success()
            ->duration(5000)
            ->send();
    }
    
    public function onMapClick(float $latitude, float $longitude): void
    {
        // Custom logic before opening create form
        logger("Map clicked at: {$latitude}, {$longitude}");
        
        parent::onMapClick($latitude, $longitude);
    }
}
```

## API Reference

### MapWidget Methods

| Method | Description |
|--------|-------------|
| `getHeading()` | Returns the widget heading |
| `getMarkers()` | Returns array of markers to display |
| `getShapes()` | Returns array of shapes to display |
| `getLayers()` | Returns combined markers and shapes |
| `onMapClick($lat, $lng)` | Handles map click events |
| `onLayerClick($layerId)` | Handles layer click events |
| `refreshMap()` | Manually refresh the map |
| `afterMarkerCreated($record)` | Hook after marker creation |
| `mutateFormDataBeforeCreate($data)` | Transform form data before save |

### Marker Methods

| Method | Description |
|--------|-------------|
| `make($lat, $lng)` | Create a new marker |
| `fromRecord()` | Create marker from Eloquent model |
| `id($id)` | Set marker ID |
| `title($title)` | Set title (tooltip & popup) |
| `color($color)` | Set marker color |
| `icon($url, $size)` | Set custom icon |
| `draggable($bool)` | Make marker draggable |
| `editable($bool)` | Make marker editable on the map |
| `group($group)` | Assign to group (string or BaseLayerGroup) |
| `popup($content, $fields, $options)` | Configure popup |
| `tooltip($content, $permanent, $direction, $options)` | Configure tooltip |
| `action($callback)` | Set click handler |
| `distanceTo($marker)` | Calculate distance to another marker |
| `validate()` | Validate coordinates |

### Shape Methods (All Shapes)

| Method | Description |
|--------|-------------|
| `color($color)` | Set border color |
| `fillColor($color)` | Set fill color |
| `weight($pixels)` | Set border width |
| `opacity($value)` | Set border opacity (0-1) |
| `fillOpacity($value)` | Set fill opacity (0-1) |
| `dashArray($pattern)` | Set dash pattern |
| `editable($bool)` | Make shape editable on the map |
| `options($array)` | Set custom options |
| `popup($content, $fields, $options)` | Configure popup |
| `tooltip($content, $permanent, $direction, $options)` | Configure tooltip |
| `action($callback)` | Set click handler |
| `group($group)` | Assign to group (string or BaseLayerGroup) |
| `getCoordinates()` | Get center coordinates of the shape |

### Circle Specific Methods

| Method | Description |
|--------|-------------|
| `make($lat, $lng)` | Create circle |
| `radius($meters)` | Set radius in meters |
| `radiusInMeters($meters)` | Set radius in meters |
| `radiusInKilometers($km)` | Set radius in kilometers |
| `radiusInMiles($miles)` | Set radius in miles |
| `radiusInFeet($feet)` | Set radius in feet |

### CircleMarker Specific Methods

| Method | Description |
|--------|-------------|
| `make($lat, $lng)` | Create circle marker |
| `radius($pixels)` | Set radius in pixels |

### Polygon/Polyline Specific Methods

| Method | Description |
|--------|-------------|
| `make($coordinates)` | Create with coordinates |
| `addPoint($lat, $lng)` | Add vertex/point |

### Polyline Specific Methods

| Method | Description |
|--------|-------------|
| `smoothFactor($factor)` | Set line smoothing |

### Rectangle Specific Methods

| Method | Description |
|--------|-------------|
| `make($corner1, $corner2)` | Create with corners |
| `makeFromCoordinates($lat1, $lng1, $lat2, $lng2)` | Create with coordinates |

### BaseLayerGroup Methods (All Layer Groups)

| Method | Description |
|--------|-------------|
| `make($layers)` | Create layer group with layers |
| `id($id)` | Set group ID |
| `name($name)` | Set group name |
| `option($key, $value)` | Set a group option |
| `options($array)` | Set multiple group options |
| `getLayers()` | Get all layers in the group |

### LayerGroup Methods

| Method | Description |
|--------|-------------|
| `make($layers)` | Create simple layer group |
| `name($name)` | Set user-visible group name |
| `id($id)` | Set group ID for controls |
| `editable($bool)` | Make all layers in group editable |

### FeatureGroup Methods

| Method | Description |
|--------|-------------|
| `make($markers)` | Create feature group from markers |
| `name($name)` | Set zone/area name |
| `blue()`, `red()`, etc. | Set border color |
| `fillBlue()`, `fillRed()`, etc. | Set fill color |
| `fillOpacity($value)` | Set fill transparency (0-1) |
| `weight($pixels)` | Set border width |
| `editable($bool)` | Make all layers in group editable |

### MarkerCluster Methods

| Method | Description |
|--------|-------------|
| `make($markers)` | Create cluster with markers |
| `fromModel()` | Create cluster from Eloquent model |
| `marker($marker)` | Add single marker |
| `markers($array)` | Add multiple markers |
| `name($name)` | Set cluster group name |
| `editable($bool)` | Make all markers in cluster editable |
| `maxClusterRadius($pixels)` | Set cluster radius (pixels) |
| `showCoverageOnHover($bool)` | Show cluster coverage on hover |
| `zoomToBoundsOnClick($bool)` | Zoom to bounds when clicked |
| `spiderfyOnMaxZoom($bool)` | Spread markers at max zoom |
| `disableClusteringAtZoom($level)` | Disable clustering at zoom level |
| `animate($bool)` | Animate cluster changes |
| `modifyQueryUsing($callback)` | Modify database query |
| `mapRecordUsing($callback)` | Customize each marker |

## Color Reference

Available colors for markers and shapes:

- `Color::Blue` / `->blue()` - #3388ff
- `Color::Red` / `->red()` - #f03
- `Color::Green` / `->green()` - #3c3
- `Color::Orange` / `->orange()` - #f80
- `Color::Yellow` / `->yellow()` - #fd0
- `Color::Violet` / `->violet()` - #a0f
- `Color::Grey` / `->grey()` - #666
- `Color::Black` / `->black()` - #000
- `Color::Gold` / `->gold()` - #ffd700

## Best Practices

### Performance Optimization

1. **Use Marker Clusters** for large datasets:
```php
// Bad: 1000 individual markers
protected function getMarkers(): array
{
    return Store::all()->map(fn($s) => Marker::fromRecord($s))->toArray();
}

// Good: Clustered markers
protected function getMarkers(): array
{
    return [
        MarkerCluster::fromModel(Store::class)
            ->maxClusterRadius(80)
    ];
}
```

2. **Limit data** with query modifications:
```php
MarkerCluster::fromModel(
    model: Store::class,
    modifyQueryCallback: fn($q) => $q->limit(100)->latest()
)
```

3. **Use appropriate zoom levels**:
```php
protected static int $defaultZoom = 12; // City level
protected static int $maxZoom = 18;     // Street level
protected static int $minZoom = 3;      // Country level
```

### User Experience

1. **Provide context** with popups:
```php
Marker::make($lat, $lng)
    ->title('Store Name')
    ->popupContent('Visit our location')
    ->popupFields([
        'address' => '123 Main St',
        'hours' => '9AM-6PM',
        'phone' => '+55 11 1234-5678',
    ]);
```

2. **Use appropriate colors**:
```php
// Status-based coloring
$marker->color(match($store->status) {
    'open' => Color::Green,
    'busy' => Color::Orange,
    'closed' => Color::Red,
    default => Color::Grey,
});
```

3. **Add visual feedback**:
```php
Circle::make($lat, $lng)
    ->radiusInKilometers(5)
    ->blue()
    ->fillBlue()
    ->onMouseOver("this.setStyle({fillOpacity: 0.6})")
    ->onMouseOut("this.setStyle({fillOpacity: 0.3})")
    ->fillOpacity(0.1)  // Subtle fill
    ->dashArray('5, 5'); // Dashed border
```

### Code Organization

1. **Extract complex logic**:
```php
protected function getMarkers(): array
{
    return [
        $this->getStoreMarkers(),
        $this->getWarehouseMarkers(),
    ];
}

private function getStoreMarkers(): MarkerCluster
{
    return MarkerCluster::fromModel(Store::class)
        ->blue()
        ->mapRecordUsing($this->configureStoreMarker(...));
}

private function configureStoreMarker(Marker $marker, Model $store): void
{
    if ($store->is_flagship) {
        $marker->gold()->icon('/images/flagship.png');
    }
    
    $marker->popupFields($store->only(['address', 'phone']));
}
```

2. **Use dedicated widget classes**:
```php
// Good structure
app/Filament/Widgets/
├── Maps/
│   ├── StoreMapWidget.php
│   ├── DeliveryMapWidget.php
│   └── AnalyticsMapWidget.php
```

### Debugging

Enable logging for map interactions:

```php
public function onLayerClick(string $layerId): void
{
    logger("Layer clicked: {$layerId}");
    parent::onLayerClick($layerId);
}

public function onMapClick(float $latitude, float $longitude): void
{
    logger("Map clicked", compact('latitude', 'longitude'));
    parent::onMapClick($latitude, $longitude);
}
```

### Enabling Draw Control

The draw control is disabled by default for better performance. To enable it:

```php
class MyMapWidget extends MapWidget
{
    protected static bool $hasDrawControl = true;
    
    protected function getMarkers(): array
    {
        return [
            // Your markers...
        ];
    }
}
```

Once enabled, users can:
- Draw new markers, shapes (circles, polygons, polylines, rectangles)
- Edit existing editable layers
- Delete layers by clicking the delete tool

Note: Only layers marked with `->editable()` can be edited on the map.

## Troubleshooting

### Markers not appearing

1. Check coordinate validity:
```php
Marker::make($lat, $lng)->validate(); // Throws exception if invalid
```

2. Verify zoom level:
```php
protected static int $defaultZoom = 12; // Try different values
```

3. Check marker is in bounds:
```php
// Ensure coordinates are visible in your map center/zoom
protected static array $mapCenter = [$your_marker_lat, $your_marker_lng];
```

### Popups not showing

1. Ensure content is set:
```php
$marker->popupContent('Some content'); // Required
```

2. Check for JavaScript errors in browser console

### Cluster not grouping

1. Increase cluster radius:
```php
MarkerCluster::make($markers)
    ->maxClusterRadius(100) // Increase this value
```

2. Check zoom level:
```php
->disableClusteringAtZoom(15) // Clusters won't show at/above this zoom
```

### Form not opening on map click

1. Verify model is set:
```php
protected static ?string $markerModel = YourModel::class;
```

2. Check column names match:
```php
protected static string $latitudeColumnName = 'latitude'; // Must match DB
protected static string $longitudeColumnName = 'longitude';
```

## License

This package is open-sourced software licensed under the MIT license.

## Credits

- Built for [Filament](https://filamentphp.com)
- Uses [Leaflet](https://leafletjs.com) for mapping
- Created by [Eduardo Ribeiro](https://github.com/eduardoribeirodev)

## Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/eduardoribeirodev/filament-leaflet). Don't forget, Jesus loves you ❤️.