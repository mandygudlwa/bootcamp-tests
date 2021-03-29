describe('countRegNumber' , function(){
    it('returns the number of registration numbers in the string.' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 81232854678GP, 79974L ,EC5768, 23662MP'), 6);

    });

    it('returns the number of registration numbers in the string that is not split' , function(){
        assert.equal(countRegNumber('CA 182736 CY 523519 CJ 81232854678GP 79974L EC5768 23662MP'), 1);

    });

});