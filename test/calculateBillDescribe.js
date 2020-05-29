describe("The calculate bill factory function", function () {

    it("should get the total number of calls", function () {
    
     let calculateBill =  phoneBillFact()

        assert.equal(2.75, calculateBill.totalPhoneBill("call"));

    });

 it("should get the total number of sms ", function () {
        let calculateBill = phoneBillFact();
    
     assert.equal(0.75, calculateBill.totalPhoneBill("sms"));
    });

     it("should calculate the total number of call and smses ", function () {
        let calculateBill = phoneBillFact();
       
     assert.equal(2.75, calculateBill.totalPhoneBill("call"));
     assert.equal(0.75, calculateBill.totalPhoneBill("sms"));
    });
  });