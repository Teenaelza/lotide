// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let emoji = "";
  if (actual === expected) {

    emoji  = "✅✅✅✅✅";
    console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    emoji  = "🚩🚩🚩🚩";
    console.log(`${emoji} Assertion Failed:[ ${actual}] !== [${expected}]`);
  }
};

//ACTUAL FUNCTION
const findKey = (Obj,callBack) => {
  for (let key in Obj) {
    if (callBack(Obj[key])){
      return key
    }
  }
};
assertEqual(findKey({     
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) ,"noma");// => "noma"