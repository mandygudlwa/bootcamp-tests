
describe('transportFee' , function(){
    it(' returns free for for night shift' , function(){
        assert.equal(transportFee("night"),'free');

    });

    it('returns the price of R10 for afternoon shift' , function(){
        assert.equal(transportFee("afternoon"),'R10');

    });

    it('returns the price of R20 for morning shift' , function(){
        assert.equal(transportFee("morning"),'R20');

    });

});