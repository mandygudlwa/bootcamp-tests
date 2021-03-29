describe('regCheck' , function(){
    it('check if a registration number is for GP registration plates' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);

    });

    it('check if a registration number is  for Mpumalanga (MP) registration plates' , function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'),false);

    });

    it('check if a registration number is  for Eastern Cape (EC) registration plates' , function(){
        assert.equal(regCheck('DV 23 LP EC', 'EC'),true);

    });


});