//https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript
function solve(arr) {
    return arr.find(el => !arr.includes(-el))
};