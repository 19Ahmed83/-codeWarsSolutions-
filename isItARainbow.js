//https://www.codewars.com/kata/59e7202ffc3c4952940000a9/train/javascript
function sortRainbow(colour){
    let rainbow = ['red','orange','yellow','green','blue','indigo','violet'];
    return rainbow.every((el, i) => el === colour[i]);
}