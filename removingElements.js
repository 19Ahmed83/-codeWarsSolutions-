//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
function removeEveryOther(arr) {
    return arr.filter((el, index) => index % 2 === 0);
}