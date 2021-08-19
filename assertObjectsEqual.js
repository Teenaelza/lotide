
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (const key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key],object2[key]) === false) { 
          return false;
        } 
      }else if (object1[key] !== object2[key]) {
          return false;
        } 
    }
  }else {
      return false;
    }
  return true;
};
// ASSERTION TEST FOR COMPARING THE ACTUAL AND EXPECTED OBJETS
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  // Implement me!
  //console.log(`Example label: ${inspect(actual)}`);
  let emoji = "";
  if (eqObjects(actual,expected)) {
    emoji = String.fromCodePoint(128512)  + String.fromCodePoint(128077);
    console.log(`${emoji} Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    emoji = String.fromCodePoint(128543)  + String.fromCodePoint(128078);
    console.log(`${emoji} Assertion Failed:[${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};


const cd = { c: [1,2], d: ["2", 3] };
const dc = { d: ["2", 3], c: [1,2] };
//console.log(eqObjects(cd, dc));
assertObjectsEqual(cd,dc);
