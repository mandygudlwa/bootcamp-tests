describe('totalPhoneBill' , function(){
    it('Function that takes in a string calls made and sms sent. Calculate the total bill for the data provided.' , function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"),'R7.45');

    });

});