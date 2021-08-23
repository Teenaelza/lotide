// TEST/ASSERTION FUNCTIONS
//FUNCTION TO COMPARE THE ARRAYS
//const eqArrays = 

const assertArraysEqual = require ('./assertArraysEqual');

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
module.exports = middle;