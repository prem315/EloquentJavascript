function reverseArray(array) {
  var output = [];
  for (var x = array.length-1; x >= 0; x--){
    output.push(array[x]);
  }
  return output;
}

console.log(reverseArray(["A", "B", "C", "D", "E"]));


function reverseArrayInPlace(array) {
  for (var i = 0; i < array.length-1; i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArrayInPlace(["A","B","C"]));
