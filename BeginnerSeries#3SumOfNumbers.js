//Beginner Series #3 Sum of Numbers
function getSum( a,b ){
    var s = a, e = b, sum = 0;
    if(a > b){ s = b; e = a;}
    for(i=s;i<=e;i++) sum += i;
    return sum;
}