describe('isWeekday' , function(){
    it('finds out if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(isWeekday('Monday'), true);

    });

    it('finds out if the parameter passed in is a weekend day.' , function(){
        assert.equal(isWeekday('Sunday'), false);

    });

});