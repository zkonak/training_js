function sameValue(param1,param2){
    if(param1===param2){
        console.log("Same type and value.");
    }else if (param1==param2){
        console.log("Same value.");
    }else if (param1.constructor==param2.constructor){
        console.log("Same type");
    
    }else{
        console.log("They are different");
    }

}


sameValue(12,12);
sameValue(24,"24");
sameValue(45,67);
sameValue("aa","aa");
sameValue("xx","vv")
sameValue("","");