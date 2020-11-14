//https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
function minSum(arr) {
    let sum = 0;
    let arr1 = arr.sort((a, b) => b - a);
    //console.log(arr1);
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + (arr1[i] * arr1[arr1.length - 1 - i]) / 2;
        //console.log(sum);
    }
    return sum;

}
//console.log(minSum([12,6,10,26,3,24]));===>342