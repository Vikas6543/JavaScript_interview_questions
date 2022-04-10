// ***************************** 1) merge two arrays and removes all duplicates elements
// Using for loop
function mergeArrays(arr1, arr2) {
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }
  for (var j = 0; j < arr2.length; j++) {
    newArray.push(arr2[j]);
  }
  var uniqueArray = newArray.filter(function (elem, pos) {
    return newArray.indexOf(elem) == pos;
  });
  return uniqueArray;
}

console.log(mergeArrays([1, 2, 3], [2, 30, 1]));

// Using ES6
function mergeArrays(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.filter(function (item, pos) {
    return newArr.indexOf(item) == pos;
  });
}

console.log(mergeArrays([1, 2, 3], [2, 30, 1]));
