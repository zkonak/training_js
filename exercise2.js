function showNumbers(param){
    
//if(!param.isNan){
    for(let i=0;i<=param;i++){

        console.log(i);
    }

    return true;
   /* }
    console.log("is not a number");
return false;*/

}   

var args = process.argv.slice(2);
if(args!='')
showNumbers(args);