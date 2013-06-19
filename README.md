# Xively-Gmaps

### This library is released under Xively Labs.

A Javascript library to track Xively feed location on Google Maps.

See a bare-bones **[DEMO HERE](http://xively.github.io/xively-gmaps/)** of a live map tracking the International Space Station.

## Setup

require jquery and xivleyjs libraries:
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.1/jquery.min.js"></script>
<script src="//d23cj0cdvyoxg0.cloudfront.net/xivelyjs-1.0.4.min.js"></script>
<script src="//d23cj0cdvyoxg0.cloudfront.net/xivelygmaps-0.1.1.min.js"></script>
```
Get your Google Maps API key and require the Google Maps JS library:
```html
<script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key={GOOGLE_API_KEY}&sensor=false"></script>
```

## How to use

Create a div where you want to render the map in, e.g:
```html
<div id="map-canvas" style="width:50%;height:264px;"></div>
```
You can set your own div id so assuming you created:
```html
<div id="my-map" style="width:50%;height:264px;"></div>
```
then you can tell the library about that map container with:
```javascript
XivelyGmaps.setMapElement("#my-map");
```

Set your Xively Api Key:
```javascript
xivelyGmaps.setKey("YOUR_XIVELY_API_KEY_HERE");
```

Render the map using your Xively feed id:
```javascript
google.maps.event.addDomListener(window, 'load', xivelyGmaps.subscribe("YOUR_XIVELY_FEED_ID"));
```
