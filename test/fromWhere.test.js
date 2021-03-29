describe('fromWhere' , function(){
    it('function that takes a car registration number as a parameter and returns the town the car is from' , function(){
        assert.equal(fromWhere('CA846804'),"Cape Town");

    });

    it('function that takes a car registration number as a parameter and returns the town the car is from' , function(){
        assert.equal(fromWhere('CJ846804'),"Paarl");

    });

    it('function that takes a car registration number as a parameter and returns the town the car is from' , function(){
        assert.equal(fromWhere('HL846804'),"Some other place!");

    });

});