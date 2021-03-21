//https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript
function digits(n) {
    let count = 0;
    let a = n.toString();
    for (let i = 0; i < a.length; i++) {
        count++
    }
    return count;
}