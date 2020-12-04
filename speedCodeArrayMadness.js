//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
function arrayMadness(a, b) {

    let res1=0;
    let res2=0;
    for(let i = 0; i < a.length; i++){
        res1 += a[i]**2;
    }
    for(let i = 0; i < b.length; i++){
        res2 += b[i]**3;
    }
    return res1>res2?true:false;

}