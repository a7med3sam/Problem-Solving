function repeatStr(number, str) {
    let newStr = "";
    for(let i=0; i<number; i++){
        newStr += str;
    }
    return newStr
}
console.log(repeatStr(6, "Hello"))