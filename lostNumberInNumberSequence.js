//https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript
function findDleteNumber(arr, mixArr) {
    return arr.reduce((acc, curr) => acc + curr, 0) - mixArr((acc, curr) => acc + curr, 0);
}

//console.log([1,2,3,4,5], [3,4,1,5])===>2 Deletion