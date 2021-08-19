// FUNCTION IMPLEMENTATION
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
const findKeyByValue = function(Obj,objVal) {
  const ObjKeys = Object.keys(Obj);
  for (let key of ObjKeys) {
    if (Obj[key] === objVal) {
      return key;
    }
  }
  return undefined;
};
const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
