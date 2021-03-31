describe('fromWhere' , function(){
    it('return the string "Cape Town" for registration that starts with CA' , function(){
        assert.equal(fromWhere('CA846804'),"Cape Town");

    });

    it('return the string "paarl" for registration that starts with CJ' , function(){
        assert.equal(fromWhere('CJ846804'),"Paarl");

    });

    it('return the string "Some other place!" for registration that starts with anything other than CA, CJ ' , function(){
        assert.equal(fromWhere('HL846804'),"Some other place!");

    });

});