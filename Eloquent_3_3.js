function count_char(str, ch){
    var count = 0;
    for(var i=0; i<str.length;i++){
        if(str.charAt(i) == ch){
            count = count + 1;
        }
    }
    return count;
}

console.log(count_char("AbcdAAA", "A"));
