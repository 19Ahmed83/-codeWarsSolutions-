//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
    let res = [];
    let minInd = numbers.indexOf(Math.min(...numbers));
    for(let i = 0; i < numbers.length; i++){
        if(i !== minInd){
            res.push(numbers[i]);
        }
    }
    return res;
}