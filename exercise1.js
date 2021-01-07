function checkAllowed(param){
if(param<18){
    console.log("Site interdit aux mineurs.");
}else if(param>=18){
    console.log("Vous pouvez entrer !");
}else{
    console.log("Wrong Parameter");

}

}
var args = process.argv.slice(2);
if(args!='')
checkAllowed(args);

