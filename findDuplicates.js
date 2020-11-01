//https://www.codewars.com/kata/5558cc216a7a231ac9000022/train/javascript
function duplicates(arr) {
    let arr1 = arr.filter((el, i) => i !== arr.indexOf(el));
    return arr1.filter((el, i) => i === arr1.indexOf(el));

}