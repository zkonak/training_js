function showArrayElements(param){
    for(let index=0;index<param.length;index++){
        console.log(param[index]);
    }
    return param.length;
}



var count=showArrayElements([2,5,6,8]);
console.log("count:"+count);