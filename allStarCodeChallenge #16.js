//https://www.codewars.com/kata/586566b773bd9cbe2b000013/train/javascript
function noRepeat(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        if(i === str.indexOf(str[i]) && i === str.lastIndexOf(str[i])){
            newStr += str[i]
        }
    }
    return newStr[0];

}