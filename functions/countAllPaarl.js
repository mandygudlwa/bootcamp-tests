function countAllPaarl(regNums){
    var regNumbers = regNums.split(',');
    var regCount = 0;
    
    for (var i=0;i<regNumbers.length;i++){
      var regTrim = regNumbers[i].trim()
      if(regTrim.startsWith('CJ')){
        console.log(regTrim)
        regCount++
      
         
         }
    
      
    }
       return regCount
  }



