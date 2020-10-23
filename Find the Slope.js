//https:www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript
function slope(points) {

    let m = (points[3] - points[1]) / (points[2] - points[0]);
    return points[2] - points[0] === 0 ? 'undefined' : String(m);
}