var mapModel = function () {
  var self = this;
};

var Location = function (properties) {
  var self = this;
  for (name in properties) {
    self[name] = properties[name];
  }
  return self;
};


var mapViewModel = function () {
  var self = this;

  self.locations = ko.observableArray([]);

  self.renderLocation = function () {

  };

  function initMap() {
    self.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 3.3699208, lng: -76.5314704},
      scrollwheel: false,
      zoom: 15
    });
  }

  initMap();
};

function initMap() {
  ko.applyBindings(new mapViewModel());
}