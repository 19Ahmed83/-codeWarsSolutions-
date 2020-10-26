//https:www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript
function converter (mpg) {

    let lpk = mpg/(4.54609188/1.609344);

    return +lpk.toFixed(2);
}