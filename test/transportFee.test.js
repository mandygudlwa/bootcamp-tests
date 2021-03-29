
describe('transportFee' , function(){
    it('Function that returns the right price based on the shift you are working' , function(){
        assert.equal(transportFee("shift"),'free');

    });

    it('Function that returns the right price for afternoon shift' , function(){
        assert.equal(transportFee("afternoon"),'R10');

    });

    it('Function that returns the price for morning shift' , function(){
        assert.equal(transportFee("morning"),'R20');

    });

});