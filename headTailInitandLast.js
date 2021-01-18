//https://www.codewars.com/kata/54592a5052756d5c5d0009c3/train/javascript

const head = (arr) => {
    return +arr.slice(0, 1).join()
}

const tail = (arr) => {
    return arr.slice(1)
}

const init = (arr) => {
    return arr.slice(0, arr.length - 1)
}

const last = (arr) => {
    return +arr.slice(-1)
}