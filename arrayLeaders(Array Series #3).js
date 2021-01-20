//https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript
const arrayLeaders = numbers =>
    numbers.filter((number, index) => {
        const totalRight = numbers.slice(index + 1).reduce((total, number) => total + number, 0)
        return number > totalRight
    })