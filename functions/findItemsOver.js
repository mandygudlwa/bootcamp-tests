function findItemsOver(list,threshold){
    var higher = [];
    for(var i=0; i<list.length;i++){
      if(list[i].qty > threshold){
        higher.push(list[i]) 
      }
    }
    return higher 
      
  }