// Underscore JS Library Functions
// See http://underscorejs.org/ for function definitions
var _ = {
  each: function(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  },
  map: function(arr, callback) {
    var newarr = [];
    for(var i = 0; i < arr.length; i++) {
      newarr.push(callback(arr[i]));
    }
    return newarr;
  },
  reduce: function(arr, callback, memo) {
    var newval = memo;
    for(var i = 0; i < arr.length; i++) {
      newval = callback(newval, arr[i]);
    }
    return newval;
  },
  find: function(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return(arr[i]);
      };
    }
    return undefined; // here if no match
  },
  filter: function(arr, callback) {
    var newarr = [];
    for(var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        newarr.push(arr[i]);
      }
    }
    return newarr;
  },
  reject: function(arr, callback) {
    var newarr = [];
    for(var i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
        newarr.push(arr[i]);
      }
    }
    return newarr;
  }
}
// you just created a library with 5 methods!

console.log("each");
_.each([1, 2, 3], console.log);  // logs each number

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("filter",evens); // returns [2,4,6].

var mapper = _.map([1, 2, 3], function(num){ return num * 3; });
console.log("map",mapper);  // returns [3,6,9]

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log("reduce",sum);  // returns 6

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("find",even); // returns 2

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("reject",odds); // returns [1,3,5]
