// FUNCTION IMPLEMENTATION
const tail = function(array) {
  let resultArray  = [];
  for (let i = 1; i < array.length; i++)  {
    resultArray.push(array[i]);
  }
  return resultArray;
};
module.exports = tail;