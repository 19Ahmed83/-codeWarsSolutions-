//https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript
function validateWord(str){
    str = str.toLowerCase();
    let unique = '';
    for(let el of str){
        if(str.indexOf(el) === str.lastIndexOf(el)){
            unique += el
        }
    }
    return !unique || unique.length === str.length
}