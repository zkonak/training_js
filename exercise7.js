function parse_JSON(str){
    let obj = JSON.parse(str);
    return obj;

}


console.log(parse_JSON('{"name":"aa", "age":42,"passed":true}'));