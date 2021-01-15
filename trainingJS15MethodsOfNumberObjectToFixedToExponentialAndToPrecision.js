//https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
function howManySmaller(arr,n){
    let arr1 = arr.map(el=>(el.toFixed(2))).filter(el=>el<n)
    return arr1.length;
}