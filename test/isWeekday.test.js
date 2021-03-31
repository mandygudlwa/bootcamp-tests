describe('isWeekday' , function(){
    it('returns true if it is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(isWeekday('Monday'), true);

    });

    it('returns false if it is not a day of the week (ie. a weekend day).' , function(){
        assert.equal(isWeekday('Sunday'), false);

    });

});