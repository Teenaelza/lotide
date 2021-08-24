const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

  it(`returns { Jason: 1, Fang: 1 } for { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false } in ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"]`, () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Jason: 1, Fang: 1 }); 
  });
});
