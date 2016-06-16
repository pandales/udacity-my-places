var initiaLocations = [
  {
    name: "Mi casa",
    description: "Lugar donde vivo",
    lat: "3.4091109",
    lng: "-76.537205",
    rendered: false
  },
  {
    name: "Cafeto Software",
    description: "Lugar donde vivo",
    lat: "3.369676",
    lng: "-76.534571",
    rendered: false
  },
  {
    name: "Universidad ICESI",
    description: "Lugar donde vivo",
    lat: "3.341846173233946",
    lng: "-76.53087471636984",
    rendered: false
  },
  {
    name: "Unicentro",
    description: "Lugar donde vivo",
    lat: "3.3737665",
    lng: "-76.5388416",
    rendered: false
  },
  {
    name: "Parque del Ingendio",
    description: "Lugar donde vivo",
    lat: "3.386642",
    lng: "-76.5319984",
    rendered: false
  }
];

var Location = function (properties) {
  var self = this;
  var myLatLng = {lat: parseFloat(properties.lat), lng: parseFloat(properties.lng)};
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: self.map,
    title: properties.name,
  });

  for (property in properties) {
    self[property] = ko.observable(properties[property]);
  }

  // Add the marker object as property of the location
  self.marker = marker;
};

var mapViewModel = function () {
  var self = this;
  self.centerLat = 3.3699208;
  self.centerLng = -76.5314704;
  self.zoom = 14;
  self.locations = ko.observableArray([]);

  // Load the initial locations to the observable array.
  initiaLocations.forEach(function (catItem) {
    self.locations.push(new Location(catItem));
  });

  // Render a marker with the location in the google map
  self.toggleRenderLocation = function (location) {
    location.rendered(!location.rendered());

    if (location.rendered()){
      self.renderLocationInMap(location);
    }
    else {
      self.removeLocationFromMap(location);
    }
  };

  self.renderLocationInMap = function (location) {
    location.marker.setMap(self.map);
  };
  self.removeLocationFromMap = function (location) {
    location.marker.setMap(null);
  };

  // Create and render the google map
  function initMap() {
    self.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: self.centerLat, lng: self.centerLng},
      scrollwheel: false,
      zoom: self.zoom
    });
  }

  // Init the google map when the mapViewModel is created
  initMap();
};

function initMap() {
  ko.applyBindings(new mapViewModel());
}