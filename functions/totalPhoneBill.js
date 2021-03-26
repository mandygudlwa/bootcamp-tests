function totalPhoneBill(callsMadesmsSent){
    //console.log(callsMadesmsSent)
    var totalBill = callsMadesmsSent.split(', ')
    
    var count = 0;
    
     for (var i=0;i<totalBill.length;i++){
      var regTrim = totalBill[i];
      if(regTrim.endsWith('s')){
        //console.log(regTrim)
        count += 0.65
      
         
         }
       else if(regTrim.startsWith('c')) {
         count+= 2.75
       }
    
      
    }
       return 'R' + count.toFixed(2);
  }