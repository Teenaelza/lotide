// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let emoji = "";
  if (actual === expected) {
    emoji = String.fromCodePoint(128512)  + String.fromCodePoint(128077);
    console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    emoji = String.fromCodePoint(128543)  + String.fromCodePoint(128078);
    console.log(`${emoji} Assertion Failed:[${actual}] !== [${expected}]`);
  }
};
//FUNCTION TO COMPARE THE ARRAYS
const eqArrays = function(array1,array2) {
//console.log (array1,array2);
  if  (array1.length  === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
//console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false

//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS