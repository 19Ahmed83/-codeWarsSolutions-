function  getAverage(marks){
    let midl = 0;
    for(let i = 0; i < marks.length; i++){
        midl = midl + marks[i];
    }
    return Math.floor(midl/marks.length);
}
//console.log(getAverage([1,1,1,1,1,1,1,2])) ===>1