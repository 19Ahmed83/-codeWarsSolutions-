//https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript
function mean(lst){
    let str = '';
    let int = 0;
    for(let el of lst){
        if(el.match(/\d/)){
            int += +el
        }else{
            str+= el
        }
    }
    return [int/10, str]
}
//console.log(mean(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']))===>[3.6, "udiwstagwo"]