const assertArraysEqual = require('../assertArraysEqual');
console.log("-----check if two arrays are equal---------")
assertArraysEqual([], []); // => should PASS
assertArraysEqual([1, 2, 3,5,8], [1, 2, 3,5,8]); // => should PASS