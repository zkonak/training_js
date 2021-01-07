function showArrayElements(param){
   
if(param!=undefined){
    for(let index=0;index<param.length;index++){
        console.log(param[index]);
    }
    return param.length;
} else{
    return 0 ;
}
}

var count=showArrayElements([5,7,8,9]);
console.log("count:"+count);

count=showArrayElements();
console.log("count:"+count);
