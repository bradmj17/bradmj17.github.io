 # am_map.js

A jQuery plugin to quickly create a leaflet map and add multiple interactive layers of points (using LatLong or UTM(x,y) coords). 
Tested in Leaflet 1.5.1

## Requirements ##

* If you use UTM coordinates, you must also load the [Leaflet.UTM library](https://github.com/jjimenezshaw/Leaflet.UTM).

        <script type="text/javascript" src="js/Leaflet.UTM/L.LatLng.UTM.js}"></script>
    
* Stamen backgrounds (only if you need a special background)

        <script type="text/javascript" src="http://maps.stamen.com/js/tile.stamen.js?v1.3.0"></script>

* And, obviously, remember to add the Leaflet plugin to your code.
---
## Create a map
    
    var map = $("#div_map").am_map( { map_settings } );

**Map settings**
* `center` *([lat,long])*: center of the map *( default: [41.55, 2.45] )*
* `height` *(string)*: height of the map *( default: 400px )*
* `iniZoom` *(integer)*: initial zoom *( default: 12 )*
* `background` *(string)*: background type *(default: 'terrain' | 'toner' | 'watercolor' | 'osm' )*

---
## Manage layers

### Add a layer
    
    map.am_map('addLayer', { layer_settings });

**Layer settings**

* `name` *(string, **required**)* : name of the layer
* `points` *(array, **required**)* : point or array of points (see [Point definition](#points))
* `UTMzone` *(string)* :    UTM zone code
* `UTMsouth` *(boolean)* : south hemisphere
* `icon` *(string)* : custom html icon
* `url` *(string)* : if defined, the plugin enable click event on every marker 
* `zoom` *(integer)* : sets the first layer zoom level
* `limitZoom` *(integer)* : sets the zoom level at which the layer is visible

<a name="points"></a>
**Point definition**
Every point is defined as an array with the following structure:
* `0` *(float, **required**)* : latitude / x coordinate (UTM)
* `1` *(float, **required**)* : longitude / y coordinate (UTM)
* `2` *(json)* : { [ `'code'` : (string) ], [ `'name'` : (string) ], [ `'text'` : (string) ] }
  * `code` : identifier (used with the url param on the click event)
  * `name` : title to be showed in the popup on the mouseover event.
  * `desc` : description to be showed in the popup on the mouseover event.

> Simple point : `[ 45.09, 4.98 ];` 
> Complete point: `[ 45.17, 4.98, { 'code' : 1, 'name' : 'This is a point' ] );` 

---

### Remove a layer
    
    map.am_map('removeLayer', layer_name (string) );

---
## Examples

    == Default Map (Mataró) =======================================================================
    $("#div_map").am_map( );

    == Copenhagen toner map =======================================================================
    $("#div_map").am_map( { 'center' : [55.676111, 12.568889], 'background' : 'toner', 'iniZoom' : 11 } );

    == Adding a point to the map ==================================================================
    $("#div_map").am_map( 'addLayer', { 'name' : 'layer1', 'points' : [ 41.55, 2.45 ] });

    == Adding a collection of points ==============================================================
    $("#div_map").am_map( 'addLayer', { 'name' : 'layer2', 'points' : [ [41.55, 2.45], [53.495, -1.083] ] });

    == Adding a point to the map with zoom level to set on map after creating layer ===============
    $("#div_map").am_map( 'addLayer', { 'name' : 'layer1', 'points' : [ 41.55, 2.45 ] });

    == Adding a point with link, title description (click and popup events) =======================
    $("#div_map").am_map( 'addLayer', { 'name' : 'layer1', 'points' : [ 41.55, 2.45, { 'code' : 1, 'name' : 'Title', 'desc' : 'Description' ], 'url' : 'https://example.com/?id=' });

    == Adding a custom point (using Font Awesome icon set) ========================================
    $("#div_map").am_map( 'addLayer', { 'name' : 'layer1', 'points' : [ 41.55, 2.45 ], 'icon' : '<i class="fa fa-stop-circle-o" style="color:#8b0000;"></i>' });


    == Adding a UTM point (zone 33) on south hemisphere ===========================================
    $("#div_map").am_map( 'addLayer', { 'name' : 'layer1', 'points' : [ [712412.50, 7503619.79] ], 'UTMzone' : 33, 'UTMsouth' : true } );

## Licence
This software is provided under the terms of the [MIT License](https://github.com/traffordDataLab/leaflet.reachability/blob/master/LICENSE).

