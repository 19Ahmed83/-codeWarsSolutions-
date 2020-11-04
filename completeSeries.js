//https://www.codewars.com/kata/580a4001d6df740d61000301/train/javascript
function completeSeries(arr) {
    let repeatVal = arr.filter((el, i) => i !== arr.indexOf(el))
    let max = Math.max(...arr);
    let newArr = [];
    for (let i = 0; i <= max; i++) {
        newArr.push(i);
    }
    return repeatVal.length > 0 ? [0] : newArr;
}