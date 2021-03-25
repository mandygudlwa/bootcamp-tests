describe('regCheck' , function(){
    it('check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('54678GP, 79974L ,EC5768, 23662MP'), false);

    });

});