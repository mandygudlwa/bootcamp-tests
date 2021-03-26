function findItemsOver20(items){
    var highQuality = [];
    for(var i=0; i<items.length;i++){
      if(items[i].qty > 20){
        highQuality.push(items[i]) 
      }
    }
    return highQuality
      
  }