//https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
function bigToSmall(arr) {
    return [].concat(...arr).sort((a, b) => a - b).reverse().join('>')
}