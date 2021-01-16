//https://www.codewars.com/kata/58846d50f54f021d90000012/train/javascript
function decimalAdjust(type, value, exp) {
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}
Math.round10 = function(value, exp) {
    return decimalAdjust('round', value, exp);
}
function rounders(value) {
    let l = value.toString().length
    for (let i=1;i<l;i++)
        value=Math.round10(value,i)

    return value
}