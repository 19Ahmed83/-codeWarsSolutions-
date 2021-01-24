//https://www.codewars.com/kata/5a61a846cadebf9738000076/train/javascript
function peak(arr){
    let  sum1=0;
    let  sum2=0;
    let  last=arr.length-1;
    let first=0;
    while(first<last){
        if(sum1>sum2){
            sum2+=arr[last];
            last--;
        }
        else if(sum1<=sum2){
            sum1+=arr[first];
            first++;
        }
    }
    return last==first&&sum1==sum2?last:-1;
}