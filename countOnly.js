
const countOnly = function (allItems,itemsToCount) {

  const resultObject = {};
 
  for (let elem in itemsToCount){
    if(itemsToCount[elem]) {
      if (allItems.includes(elem)){
      //console.log(resultObject[elem]);
        if((resultObject[elem])>1) {
        resultObject[elem]+=1;
        } else {
            resultObject[elem]=1;
        }
      }
    }
  }
  return resultObject;
};
module.exports = countOnly;
