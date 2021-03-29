describe('isFromBellville' , function(){
    it('checks registration number from bellville' , function(){
        assert.equal(isFromBellville('CY678'),true);

    });

    it('checks registration number is not from bellville' , function(){
        assert.equal(isFromBellville('CA678'),false);

    });

});