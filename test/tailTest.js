const tail = require('../tail');
const assertEqual = require('../assertEqual');
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