function invert(array){
    let newArr = [];
    for(let el of array){
        if(el >= 0 || el <= 0){
            newArr.push(el * -1);
        }
    }
    return newArr;
}