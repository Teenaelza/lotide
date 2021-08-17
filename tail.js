// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let emoji = "";
  if (actual === expected) {
    emoji = String.fromCodePoint(128512)  + String.fromCodePoint(128077);
    console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    emoji = String.fromCodePoint(128543)  + String.fromCodePoint(128078);
    console.log(`${emoji} Assertion Failed:[ ${actual}] !== [${expected}]`);
  }
};
const tail = function(array) {
  let resultArray  = [];
  for (let i = 1; i < array.length; i++)  {
    resultArray.push(array[i]);
  }
  return resultArray;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// Test Case1: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
// Test Case2: Check with one array value
const result1 = tail(["Hello"]);
assertEqual(result1.length, 0); // ensure first element is empty
// Test Case2: Check with no value
const result2 = tail([]);
assertEqual(result2.length,0); // ensure first element is empty