// ********************** 1) remove duplicates from array using for loop
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 10]));

// ***************************** 2) get the smallest two numbers & add first two numbers
// Using ES6
function sorted(numbers) {
  const sortedNum = numbers.sort((a, b) => a - b);
  const [firstNum, secondNum] = sortedNum;
  return firstNum + secondNum;
}

// Using For Loop
function smallTobig(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
    result.push(numbers[i]);
  }
  return result;
}

console.log(smallTobig([5, 2, 1, 4]));

//  *************************************** 3) sort an array
var givenArray = [5, 1, 99, 25];
// a) ascending order
givenArray.sort((a, b) => {
  return a - b;
});
// b) descending order
givenArray.sort((a, b) => {
  return b - a;
});

// c) sorts an array alphabetically
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const result = fruits.sort();

// ****************************** 4) find the largest number in an array
// Using for loop
function findLargestNum(numbers) {
  let largestNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNum) {
      largestNum = numbers[i];
    }
  }
  return largestNum;
}

console.log(findLargestNum([5, 2, 1, 4]));

// Using ES6 filter
function largestNum(arr) {
  return arr
    .filter(function (num) {
      return num > 0;
    })
    .sort(function (a, b) {
      return b - a;
    })[0];
}

console.log(largestNum([-2, -1, 0, 1, 2, 8]));

// ******************************** 5) find the unique elements from two arrays
// Using for loop
function unique(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    if (result.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    if (result.indexOf(arr2[j]) === -1) {
      result.push(arr2[j]);
    }
  }
  return result;
}

console.log(unique([1, 2, 3, 4, 5], [1, 2, 3, 8, 9]));

// Using ES6
function uniqueElements(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(uniqueElements([1, 2, 3, 4, 5], [1, 2, 3, 8, 9]));

// using filter method
function uniqueElements(arr1, arr2) {
  return arr1.concat(arr2).filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
}

console.log(uniqueElements([1, 2, 3, 5], [1, 2, 3, 4, 5, 8, 9]));

// ***************************** 6) swap an array with the given index using for loop
function swap(arr, index) {
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}

console.log(swap([1, 2, 3, 4, 5], 2));

// ********************************* 7) random items from array
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

console.log(randomItem(['apple', 'pear', 'orange']));

// ****************************** 8) find nth largest number in an array
function findNthLargest(arr, n) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - n];
}

console.log(findNthLargest([2, 4, 6, 8], 3));

// ***************************** 9) find if an array contains a given element
function arrayContains(array, element) {
  return array.indexOf(element) !== -1;
}

console.log(arrayContains([1, 2, 3, 4, 5], 2));

// ******************************** 10) remove a specific element from an given array
// Using splice
function removeElement(arr, element) {
  var index = arr.indexOf(element);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(removeElement([1, 2, 3, 4, 5, 6], 3));

// Using filter
function removeElement(arr, element) {
  return arr.filter(function (e) {
    return e !== element;
  });
}

console.log(removeElement([1, 2, 3, 4, 5, 6], 3));
