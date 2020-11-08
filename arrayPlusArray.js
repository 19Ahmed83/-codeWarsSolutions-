//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
function arrayPlusArray(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    let sum = 0;
    for(let i = 0; i < arr1.length; i++){
        sum1 = sum1 + arr1[i];
    }for(let i = 0; i < arr2.length; i++){
        sum2 = sum2 + arr2[i];
    }
    return sum1+sum2;
}