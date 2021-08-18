// TEST/ASSERTION FUNCTIONS
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
//ACTUAL FUNCTION TO FIND THE MIDDLE NUMBER
const middle = function(array) {
  const middleArray = [];
  const isEven = array.length % 2 === 0 ? true : false;
  if (array.length > 2) {
    if (isEven) {
 
      middleArray.push(array[Math.floor(array.length / 2 - 1)]);
      middleArray.push(array[(Math.floor(array.length / 2))]);
    } else {
      middleArray.push(array[Math.floor(array.length / 2)]);
    }
  }
  return middleArray;
};
assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => should PASS

//middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]