
//ACTUAL FUNCTION
const countLetters = function(InputString) {
  let countObject = {};
  for (let char of InputString) {
    if (InputString.includes(char)) {
      if (countObject[char]) {
        countObject[char] += 1;
      } else {
        countObject[char] = 1;
      }
    }
  }
  return countObject;
};
module.exports = countLetters;

