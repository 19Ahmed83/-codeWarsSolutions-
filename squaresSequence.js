//https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript
function squares(x, n) {
    let result = [x];
    if (n <= 0){
        return [];
    } else for(let i = 1; i < n; i++){
        result.push(Math.pow((result[result.length-1]), 2));
    }
    return result;
}