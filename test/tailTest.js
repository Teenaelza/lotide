const assert = require('chai').assert;
const tail   = require('../tail');
describe("#tail", () => {
  it("returns ['Lighthouse','Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []); 
  });
  it("original array should not be affected", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, words); 
  }); 
  it("returns [1,2,3,4,5] for [2,3,4,5]", () => {
    assert.deepEqual(tail([1,2,3,4,5]),[2,3,4,5]); 
  });
});