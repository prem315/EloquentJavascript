var n = 50;

for(var i=1;i<n;i++){
    if((i%3==0 && i%5==0)){
        console.log("FizzBuzz");
    }
    if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }

}
