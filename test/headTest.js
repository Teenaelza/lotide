const head = require('../head');
const assertEqual = require('../assertEqual');
console.log("------implement head assertions---------")
//assertion for head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head(["Hello"]), "Hello");