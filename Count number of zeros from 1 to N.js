//https://www.codewars.com/kata/557cffec8c3e8e55cc00010f/train/javascript
function countZeros(n) {
    let str = n.toString();
    let count = 0;
    for (let i = 0; i < n; i++) {
        str = str.toString()
        if (str.includes('0')) {
            count += str.replace(/[^0]/g, '').length
        }
        str = str - 1
    }
    return count;
}