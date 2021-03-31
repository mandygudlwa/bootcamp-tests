describe('countAllPaarl' , function(){
    it('returns the total number of registration numbers from Paarl' , function(){
        assert.equal(countAllPaarl('CA 182736,CY 523519,CJ 81232854678GP, 79974L ,EC5768, 23662MP'), 1);

    });


    it('returns the number of registration numbers that are from Paarl when no registration number starts with CJ' , function(){
        assert.equal(countAllPaarl('CA 182736,CY 523519, 79974L ,EC5768, 23662MP,'), 0);

    });



});