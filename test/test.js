var assert = require('assert');
var C = require('../cash.js');  // our module

describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    });

    it('getChange(820,910) should equal [50,20,20]', function(){
        assert.deepEqual(C.getChange(820,910), [50, 20, 20]);
    }); // use .deepEqual for arrays see: http://stackoverflow.com/questions/13225274/

    it('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
        assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);
    });

    it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function(){
        assert.deepEqual(C.getChange(1487,10000), [5000, 2000, 1000, 500, 10, 2, 1 ]);
    });

<<<<<<< HEAD
    it('getChange(300,330) should equal [20, 10 ]', function(){
        assert.deepEqual(C.getChange(300,330), [20, 10 ]);
=======
    it('getChange(888,888) should equal []', function(){
        assert.deepEqual(C.getChange(888,888), [ ]);
    });

    it('getChange(444,444) should equal []', function(){
        assert.deepEqual(C.getChange(444,444), [ ]);
>>>>>>> 1bebb579cf6872bf2ed7e1baca9a68bec21fa2f6
    });

    // try to force an error:
    it('getChange("random","str") to throw error', function(){
        assert.throws(function(){C.getChange("random","str")}, Error, "totalPayable and cashPaid MUST both be numbers");
        //assert.deepEqual(C.getChange("random","str"), []);
    });

  });
});
