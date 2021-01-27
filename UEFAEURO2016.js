//https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
function uefaEuro2016([t1,t2], [s1,s2]){
    if(s1>s2)return `At match ${t1} - ${t2}, ${t1} won!`;
    if(s1<s2) return `At match ${t1} - ${t2}, ${t2} won!`;
    if(s1===s2) return `At match ${t1} - ${t2}, teams played draw.`
}