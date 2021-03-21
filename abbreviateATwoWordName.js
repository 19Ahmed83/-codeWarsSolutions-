//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name) {

    [first, last] = name.toUpperCase().split(' ');
    return first[0] + '.' + last[0]

}