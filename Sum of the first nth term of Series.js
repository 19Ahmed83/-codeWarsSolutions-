//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
function SeriesSum(n){
    let sum = 0;
    for(let  i = 0; i < n; i++){
        sum = sum + 1/(1+3*i)
    }
    return sum.toFixed(2);
}