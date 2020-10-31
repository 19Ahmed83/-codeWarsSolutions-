//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num) {
    let string = num.toString();
    let results = [];
    for (let i = 0; i < string.length; i++) {
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
}