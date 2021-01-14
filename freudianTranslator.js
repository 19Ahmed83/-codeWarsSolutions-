//https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript
function toFreud(str) {
    return str.split(' ').map(el => el.length === 0 ? '' : 'sex').join(' ')
}
//console.log(toFreud("This is a test"))=>>> "sex sex sex sex"