describe('countAllFromTown' , function(){
    it('return number registration numbers from Cape Town(CA).' , function(){
        assert.equal(countAllFromTown('CA182736 CY523519 CJ81232854678GP 79974L EC5768 23662MP','CA'), 1);

    });

    it('return number registration numbers from Gauteng(GP).' , function(){
        assert.equal(countAllFromTown('CA182736 CY523519 C81232854678 79974L EC5768 23662MP','CY'), 0);

    });

});