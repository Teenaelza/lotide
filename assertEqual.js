// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let emoji = "";
  if (actual === expected) {

    emoji  = "✅";
    console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    emoji  = "❌ ";
    console.log(`${emoji} Assertion Failed:[ ${actual}] !== [${expected}]`);
  }
};

module.exports = assertEqual;