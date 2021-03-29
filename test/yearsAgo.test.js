describe('yearsAgo' , function(){
    it('return how many years ago that year is from the current year.' , function(){
        assert.equal(yearsAgo(1998),23);

    });

    it('return how many years ago that year is from the current year.' , function(){
        assert.equal(yearsAgo(2004),17);

    });

});