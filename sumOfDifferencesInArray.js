//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
function sumOfDifferences(arr) {
    arr.sort((a,b)=>b-a)
    return (arr.length > 1)?arr[0] - arr[arr.length-1]:0
}