function getSumOfDigits(integer) {
    let sum = 0;
    let str = integer.toString().split('');
    for (let i = 0; i < str.length; i++) {
        sum = sum + +str[i];
    }
    return sum;
}

console.log(getSumOfDigits(123))