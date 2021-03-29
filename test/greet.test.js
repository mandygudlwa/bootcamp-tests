describe('greet' , function(){
    it('greets a person' , function(){
        assert.equal(greet("Amanda"),'Hello, Amanda');

    });

    it('greets another person' , function(){
        assert.equal(greet("Jon Doe"),'Hello, Jon Doe');

    });

});