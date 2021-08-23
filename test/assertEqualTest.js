const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log("------assertequal---------")
//for assertequal edgecases
assertEqual(1,1);
console.log("------implement head assertions---------")
//assertion for head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head(["Hello"]), "Hello");
console.log("------tail---------")
//assertion for tail.js
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
console.log("------tail check if the original array is affected after implementing tail---------")
// edge Case1: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
// edge Case2: Check with one array value
const result1 = tail(["Hello"]);
assertEqual(result1.length, 0); // ensure first element is empty
// edge Case2: Check with no value
const result2 = tail([]);
assertEqual(result2.length,0); // ensure first element is empty
console.log("-----check if two arrays are equal using boolean value---------")
//assertion test for equal array
//console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
////console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false
//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
console.log("-----check if two arrays are equal---------")
assertArraysEqual([1, 2, 3], [1,2,3,5,8]); // => should PASS
assertArraysEqual([1, 2, 3,5,8], [1, 2, 3,5,8]); // => should PASS
console.log("-----Implement middle assertions---------")
assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => should PASS