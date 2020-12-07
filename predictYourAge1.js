//https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
let arr=[age1,age2,age3,age4,age5,age6,age7,age8]
let newArr=arr.map(el=>el*el);
let sum=0
for(let el of newArr){
    sum=sum+el;

}
return Math.floor(Math.sqrt(sum)/2)
}