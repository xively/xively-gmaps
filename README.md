# Xively-Gmaps

A Javascript library to track Xively feed location on Google Maps.

# Setup

require jquery and xivleyjs libraries:
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.1/jquery.min.js"></script>
<script src="//d23cj0cdvyoxg0.cloudfront.net/xivelyjs-1.0.4.min.js"></script>
TODO: add url to xivelygmaps on S3

Get your Google Maps API key and require the Google Maps JS library:
<script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key={GOOGLE_API_KEY}sensor=false"></script>

# How to use

Create a div where you want to render the map in, e.g:
<div id="map-canvas" style="width:50%;height:264px;"/>

Set your Xively Api Key:
xivelyGmaps.setKey("YOUR_XIVELY_API_KEY_HERE");

Render the map using your Xively feed id:
google.maps.event.addDomListener(window, 'load', xivelyGmaps.subscribe("YOUR_XIVELY_FEED_ID"));



