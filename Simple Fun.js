//https:www.codewars.com/kata/588417e576933b0ec9000045/train/javascript
function seatsInTheater(nCols, nRows, col, row) {
    let cols = nCols - col+1;
    let rows = nRows - row;
    return cols * rows;


}