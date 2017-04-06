// JavaScript code
console.log('JS Fundamentals Part I');
var x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];
console.log(x);
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
for (i in x) {
  console.log(x[i]);
}

for (y=0, i=1; i<=500; y+=i, i++) {}
console.log("y =",y);
console.log("Alternatively, y =",500*501/2);

var arr=[1, 5, 90, 25, -3, 0];
var min = arr[0];
var avg = arr[0];
for (i=1; i<arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
  avg += arr[i];
}
avg /= arr.length;
console.log("Min =", min, "Avg =", avg);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (key in newNinja) {
  console.log(key, ":", newNinja[key]);
}
