describe('isWeekday' , function(){
    it('finds out if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(isWeekday('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'), true);

    });

});