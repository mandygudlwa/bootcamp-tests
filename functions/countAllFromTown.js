function countAllFromTown(regNums, regStr){
    var newRegNums = regNums.split(',');
    var regCount = 0;
    
    for (var i=0;i<newRegNums .length;i++){
      var regTrim = newRegNums [i].trim()
      if(regTrim.startsWith(regStr)){
        //console.log(regTrim)
        regCount++
      
         
         }
    
      
    }
       return regCount
  }
    
  