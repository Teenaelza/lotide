const assert = require('chai').assert;
const countLetters   = require('../countLetters.js');
describe("#countLetters", () => {
  it("returns { L: 2, H: 1 } for 'LHL'", () => {
    assert.deepEqual(countLetters("LHL"), { L: 2, H: 1 }); 
  });
});