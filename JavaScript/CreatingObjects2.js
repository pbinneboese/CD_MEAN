// JavaScript code
function Vehicle(name, noise, wheels, passengers, speed) {
  var distance_travelled = 0;
  var my = this;  // for private methods

  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;

  this.makeNoise = function() {
    console.log(noise);
  }
  this.move = function() {
    updateDistanceTravelled();
    this.makeNoise();
  }
  this.checkMiles = function() {
    console.log("Distance travelled =", distance_travelled);
  }

  var updateDistanceTravelled = function() {
    distance_travelled += my.speed;
  }
}
var myBike = new Vehicle("bike", "ring ring", 2, 1, 5);
// myBike.makeNoise();
myBike.move();
myBike.move();
myBike.checkMiles();

var mySedan = new Vehicle("sedan", "Honk Honk!", 4, 5, 50);
mySedan.makeNoise();

var myBus = new Vehicle("bus", "Aoogah!", 6, 32, 30);
console.log("wheels:", myBus.wheels, "passengers:", myBus.passengers)
myBus.pickupPassengers = function(pickingUp) {
  myBus.passengers += pickingUp;
}
myBus.pickupPassengers(5);
console.log("passengers now:", myBus.passengers);
