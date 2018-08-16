var assert = require('assert');
const fang = require('../src/example').foo;
describe("Numbers", function(){
    describe("Even Or Odd", function(){
        it('should return 0 for even and 1 for odd numbers', function(){
        assert.equal(0, fang(2));
    });
  });
});
