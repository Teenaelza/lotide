
const eqArrays= require ('./eqArrays');
// FUNCTION IMPLEMENTATION FOR COMPARING THE ACTUAL AND EXPECTED VALUE
const assertArraysEqual = function(actual, expected) {
  let emoji = "";
  if (eqArrays(actual,expected)) {
    emoji  = "✅";
    console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    emoji  = "❌ ";
    console.log(`${emoji} Assertion Failed:[ ${actual}] !== [${expected}]`);
  }
};
module.exports = assertArraysEqual;
