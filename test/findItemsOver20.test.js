describe('findItemsOver20' , function(){
    it('return the products that have a quantity higher than 20(pears and banana).' , function(){
        assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},])
        
        ,[{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
       

    });


      it('return the products that have a quantity higher than 20(pears only).', function(){
        assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},
        {name : 'pears', qty : 7},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},])
        
        ,[{name : 'bananas', qty : 27},]);
       

    });

});