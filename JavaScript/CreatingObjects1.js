// JavaScript code
function Vehicle(name, wheels, passengers) {
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;

  this.makeNoise = function(noise) {
    console.log(noise);
  }
}
var myBike = new Vehicle("bike", 2, 1);
myBike.makeNoise("ring ring");

var mySedan = new Vehicle("sedan", 4, 5);
mySedan.makeNoise("Honk Honk!");

var myBus = new Vehicle("bus", 6, 32);
console.log("wheels:", myBus.wheels, "passengers:", myBus.passengers)
myBus.pickupPassengers = function(pickingUp) {
  myBus.passengers += pickingUp;
}
myBus.pickupPassengers(5);
console.log("passengers now:", myBus.passengers);
