// **************************** 1) finding the length of object
function length(obj) {
  var count = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

console.log(length({ name: 'Vikas', age: 25 }));
