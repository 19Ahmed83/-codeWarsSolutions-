//https://www.codewars.com/kata/5844a422cbd2279a0c000281/train/javascript
function multi(arr) {
    return arr.reduce((acc,cul)=>acc*cul,1)
}
function add(arr) {
    return arr.reduce((acc,cul)=>acc+cul,0)
}
function reverse(str) {
    return str.split('').reverse().join('')
}