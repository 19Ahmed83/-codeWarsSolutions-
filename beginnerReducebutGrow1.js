//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
function grow(x){
    let res=1;
    for(let i = 0; i < x.length; i++){
        res *=x[i];
    }
    return res;

}