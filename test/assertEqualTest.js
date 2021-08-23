const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');

//for assertequal edgecases
assertEqual(1,1);

//assertion for head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head(["Hello"]), "Hello");
//assertion for tail
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
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