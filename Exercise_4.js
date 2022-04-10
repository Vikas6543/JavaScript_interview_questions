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

// ******************************* 2) find the pair of elements in the array whose sum is equal to the given number

function findPair(arr, sum) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

console.log(findPair([1, 2, 3, 4, 5, 6], 6));

// ***************************** 2) find the union of two arrays
// Using for loop
function union(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (var j = 0; j < arr2.length; j++) {
    if (newArr.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

console.log(union([1, 2, 3, 4], [2, 3, 4, 5, 9]));

// Using ES6
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));

// *************************** 3) find the dupliate values in an array
// Using for loop
function findDuplicate(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(
  findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

// Using ES6
function findDuplicates(arr) {
  const duplicates = [];
  const unique = [...new Set(arr)];
  unique.forEach((item) => {
    if (arr.filter((i) => i === item).length > 1) {
      duplicates.push(item);
    }
  });
  return duplicates;
}

console.log(
  findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

// ******************************* 4) find the longest name in a given array
function findLongestName(array) {
  var longestName = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longestName.length) {
      longestName = array[i];
    }
  }
  return longestName;
}

console.log(findLongestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo']));

// ****************************** 5) find the number of occurrences of each letter in specified string
function countOccurrences(string) {
  var result = {};
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

console.log(countOccurrences('hello'));

// ******************************** 6) find all larger elements in an array of a given size
function findLargerElements(arr, size) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > size) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(findLargerElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));

// ********************************* 7) find the second smallest number & second greatest number
function secondLowest(arr) {
  var sorted = arr.sort(function (a, b) {
    return a - b;
  });
  var secondLowest = sorted[1];
  var secondGreatest = sorted[sorted.length - 2];
  return [secondLowest, secondGreatest];
}

console.log(secondLowest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ********************************* 8) count vowels in a string using filter map
function countVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('hello'));
