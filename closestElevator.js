//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript
function elevator(left, right, call){
    if(Math.abs(left - call) === Math.abs(right - call)){
        return 'right';
    }else if (Math.abs(left - call) < Math.abs(right - call)){
        return 'left';
    }else return 'right';
}