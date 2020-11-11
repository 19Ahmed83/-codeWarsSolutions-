//https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef/train/javascript
function findChildren(santasList, children) {
    return children.filter((el,i)=>santasList.includes(el) && i=== children.indexOf(el)).sort()

}