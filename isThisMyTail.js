//https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript
function correctTail(bod, tail) {

    let sub = bod.substr(bod.length - (tail.length))

    if (sub === tail) {
        return true
    } else
        return false
}