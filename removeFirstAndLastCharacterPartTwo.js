//https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript
const array = array_ =>
    array_
        .split(',')
        .slice(1, -1)
        .join(' ') || null