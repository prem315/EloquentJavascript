function range(start, end){
    var arr=[];
    for(var i=start; i<=end;i++){
        arr.push(i);
    }
    return arr;
}


function sumAll(arr) {
    var i, sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumAll(range(2,5)));
