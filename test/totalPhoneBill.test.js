describe('totalPhoneBill' , function(){
    it('Return the total for the cell phone data provided' , function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"),'R7.45');

    });

    it('return 13.60 for four calls made and four smses sent.' , function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms, call, sms, call"),'R13.60');

    });

    it('Return R5.50 for Four calls made.' , function(){
        assert.equal(totalPhoneBill("call,  call, call,  call"),'R5.50');

    });

});