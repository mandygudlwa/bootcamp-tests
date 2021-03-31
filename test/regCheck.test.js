describe('regCheck' , function(){
    it('return true if the is a registration number from Gauteng ' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);

    });

    it('Return true if there is a registration number from Eastern Cape' , function(){
        assert.equal(regCheck('DV 23 LP EC', 'EC'),true);

    });


});