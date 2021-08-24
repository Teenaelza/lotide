const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
console.log("-----check if two arrays are equal using boolean value---------")
//assertion test for equal array
//console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
////console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false
//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS