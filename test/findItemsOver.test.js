
  describe('findItemsOver' , function(){
    it('TThe function should return products that have quantity higher than the threshold.' , function(){
        assert.deepEqual(findItemsOver([{name : 'pears', qty : 37},
        {name : 'pears', qty : 27}], 27)
        
        ,[{name : 'pears', qty : 37}])
       

    });


    it('TThe function should return products that have quantity higher than the threshold.' , function(){
      assert.deepEqual(findItemsOver([{name : 'banana', qty : 37},
      {name : 'banana', qty : 27}], 27)
      
      ,[{name : 'banana', qty : 37}])
     

  });

});