const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([3, 2, 1]), [3]);

describe("#middle", () => {
  it("returns '[7]' for [6, 7, 8]", () => {
    assert.deepEqual(middle([6, 7, 8]), [7]);
})});