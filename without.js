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
  // FUNCTION IMPLEMENTATION FOR COMPARING THE ACTUAL AND EXPECTED VALUE
const assertArraysEqual = function(actual, expected) {
  let emoji = "";
  if (eqArrays(actual,expected)) {
    emoji = String.fromCodePoint(128512)  + String.fromCodePoint(128077);
    console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    emoji = String.fromCodePoint(128543)  + String.fromCodePoint(128078);
    console.log(`${emoji} Assertion Failed:[ ${actual}] !== [${expected}]`);
  }
};
//FUNCTION TO REMOVE THE SUBSET ARRAY
const without = function(mainarray,subarray) {
  const resultArray = [];
  for (let elem of mainarray) {
    
    if (!(subarray.includes(elem))) {
      resultArray.push(elem);
    }
  }
  return resultArray;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);