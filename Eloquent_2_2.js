for(var x=0; x<8;x++){
    for(var y=0;y<8;y++){
        if((x % 2 == 1 && y % 2 == 1) || (x%2 == 0 && y%2 == 0)){
            console.log(" ");
        }
        else{
            console.log("#");
        }

    }

}
