var isSquare = function(n){
    if(Math.sqrt(n) % 1 !== 0){
        return false;
    }else if(Math.sqrt(n) % 1 === 0){
        return true;
    }
}
//Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");