//https://www.codewars.com/kata/58308360aeb69a460b0002b2/train/javascript
function unique(arr) {
    return arr.filter((el, i) => i === arr.indexOf(el))

}