
  describe('findItemsOver' , function(){
    it('return products that have quantity higher than the threshold(pears).'  , function(){
        assert.deepEqual(findItemsOver([{name : 'pears', qty : 37},
        {name : 'pears', qty : 27}], 27)
        
        ,[{name : 'pears', qty : 37}])
       

    });


    it('return products that have quantity higher than the threshold(banana).' , function(){
      assert.deepEqual(findItemsOver([{name : 'banana', qty : 37},
      {name : 'banana', qty : 27}], 27)
      
      ,[{name : 'banana', qty : 37}])
     

  });

});