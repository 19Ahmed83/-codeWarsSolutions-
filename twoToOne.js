//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
function longest(s1, s2) {
    var result = [];
    var temp = s1.concat(s2).split("").sort();
    temp.reduce(function(previous,current){
        if (current !== previous) {
            result.push(current);
            return current;
        } else {
            return previous;
        }
    },0);
    return result.join("");
}