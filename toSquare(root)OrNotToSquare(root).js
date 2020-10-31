//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
function squareOrSquareRoot(array) {
    return array.map(el => {
        if (Number.isInteger(Math.sqrt(el))) {
            return Math.sqrt(el);
        }
        return Math.pow(el, 2)
    })

}