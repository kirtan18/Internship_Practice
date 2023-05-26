var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(2), 1);
    });
  });
});


describe('First Test Case', function() {
   it('Value Check', function() {
      assert.equal([1, 2, 3].indexOf(3), 2);
   });
   it('Value Check 2', function() {
      assert.equal([1, 2, 3].indexOf(1), 0);
   });
});