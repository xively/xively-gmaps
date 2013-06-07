// xively-gmaps
// version 0.0.1
// (c) 2013 Xively Ltd, a LogMeIn company [baself@gmail.com]
// http://xively.github.com/xively-gmaps/
// released under the MIT license

var xivelyGmaps = (function ($) {
  "use strict";

  var methods,
      APIendpoint = "https://api.xively.com/v2/",
      WSendpoint = "ws://api.xively.com:8080/",
      previousLocation,
      map,
      marker,
      mapElement = "#map-canvas";


  methods = {
    setKey: function(apiKey) {
      xively.setKey(apiKey);
    },

    setApiEndpoint: function(api_endpoint) {
      xively.setEndpoint(api_endpoint || APIendpoint)
    },

    setWsEndpoint: function(ws_endpoint) {
      xively.setWSEndpoint();
    },

    subscribe: function(feed_id) {
      var self = this;
      xively.feed.get(feed_id, function(feedData) {
        self.renderMap(feedData);
       });

      xively.feed.subscribe(feed_id, function(event, feedData){
        self.renderMap(feedData);
      });
    },

    setMapElement: function(ele) {
      mapElement = ele;
    },

    renderMap: function(feedData) {
      var self = this;
      var location = feedData.location;

      if (feedData && self.checkValidLocation(location)) {
        var position = new google.maps.LatLng(location.lat, location.lon);
        var markerTitle = "Feed id: " + feedData.id + "\n" +
                          "Latitude: " + location.lat + "\n" +
                          "Longitude: " + location.lon;

        if ( typeof(previousLocation) === 'undefined'  ) {
          var mapOptions = {
              center: position,
              zoom: 13,
              mapTypeId: google.maps.MapTypeId.ROAD_MAP
            };

          map = new google.maps.Map($(mapElement)[0], mapOptions);
          self.setMarker(position, markerTitle);
        } else if ((location.lat !== previousLocation.lat) || (location.lon !== previousLocation.lon)) {
          if (marker) { marker.setMap(null); }
          self.setMarker(position);
          map.setCenter(position, markerTitle);
        }

        previousLocation = location;
      } else {
        $(mapElement).html("Awaiting Location Data");
      }
    },

    checkValidLocation: function(location) {
      return location && location.lat && location.lon;
    },

    setMarker: function(position, title) {
      marker = new google.maps.Marker({
                position: position,
                map: map,
                zoom: 13,
                title: title
             });
    }
  }

  return methods;
})(jQuery);
