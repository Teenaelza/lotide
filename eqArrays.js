const assertEqual = require ('./assertEqual');

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

module.exports=eqArrays;
