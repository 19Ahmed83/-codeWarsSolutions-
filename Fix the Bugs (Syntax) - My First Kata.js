//https://www.codewars.com/kata/56aed32a154d33a1f3000018/train/javascript
function myFirstKata(a, b) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        return false;
    } else if (typeof a === 'number' && typeof b === 'number') {
        return (a % b) + (b % a);
    }
}