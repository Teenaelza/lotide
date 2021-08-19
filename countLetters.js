// TEST Assertion FUNCTION IMPLEMENTATION FOR COMPARING THE ACTUAL AND EXPECTED VALUE
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
  
const result1 = countLetters("lighthouse in the house");
console.log(result1);
assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);
