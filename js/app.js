var initiaLocations = [
  {
    name: "Mi casa",
    description: "Lugar donde vivo",
    lat: "3.3699208",
    lng: "-76.5314704"
  },
  {
    name: "Cafeto Software",
    description: "Lugar donde vivo",
    lat: "3.3699208",
    lng: "-76.5314704"
  },
  {
    name: "Universidad ICESI",
    description: "Lugar donde vivo",
    lat: "3.3699208",
    lng: "-76.5314704"
  },
  {
    name: "Unicentro",
    description: "Lugar donde vivo",
    lat: "3.3699208",
    lng: "-76.5314704"
  },
  {
    name: "Parque del Ingendio",
    description: "Lugar donde vivo",
    lat: "3.3699208",
    lng: "-76.5314704"
  }
];

var Location = function (properties) {
  var self = this;
  for (property in properties) {
    self[property] = ko.observable(properties[property]);
  }
};

var mapViewModel = function () {
  var self = this;

  self.locations = ko.observableArray([]);

  initiaLocations.forEach(function (catItem) {
    self.locations.push(new Location(catItem));
  });

  self.renderLocation = function (location) {

  };

  function initMap() {
    self.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 3.3699208, lng: -76.5314704},
      scrollwheel: false,
      zoom: 14
    });
  }

  initMap();
};

function initMap() {
  ko.applyBindings(new mapViewModel());
}