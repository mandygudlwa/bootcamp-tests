
describe('transportFee' , function(){
    it('Function that returns the right price based on the shift you are working' , function(){
        assert.equal(transportFee("shift"),'free');

    });

});