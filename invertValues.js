//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
function invert(array) {
    let newArr = [];
    for(let el of array){
        if(el >= 0 || el <= 0){
            newArr.push(el * -1);
        }
    }
    return newArr;
}