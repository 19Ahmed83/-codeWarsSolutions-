//https:www.codewars.com/kata/59c287b16bddd291c700009a/train/javascript
function iceBrickVolume(radius, bottleLength, rimLength) {
    let h = bottleLength - rimLength;
    let a = radius**2;
    let b = radius**2;
    return (a+b)*h;
}