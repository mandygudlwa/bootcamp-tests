//most profitable department
function mostProfitableDepartment(soldItems){
    const soldItemsMap ={};
    
    for(var i=0;i<soldItems.length;i++){
      const stuff = soldItems[i];
      soldItemsMap[stuff.department] = 0
    }
    for(var i=0;i<soldItems.length;i++){
      const stuff = soldItems[i];
      var result = soldItemsMap[stuff.department];
      result += stuff.sales
      soldItemsMap[stuff.department] = result
    }
    //console.log(soldItemsMap)
    var currentMaxSales =0;
    var currentDepartment = "";
    for(const soldItemsDepartment in soldItemsMap){
      //console.log(soldItemsDepartment)
      //console.log(soldItemsMap[soldItemsDepartment]);
      const currentItemDepertmentSales = soldItemsMap[soldItemsDepartment]; 
      if(currentItemDepertmentSales > currentMaxSales){
        currentMaxSales = currentItemDepertmentSales;
        currentDepartment = soldItemsDepartment;
        
         }
      
      
    }
     //console.log(currentMaxSales)
     return currentDepartment
    
  }
  
  