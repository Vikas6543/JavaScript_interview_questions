// **************************** 1)Reverse a string
// ('First solution');
function reverse(str) {
  const splited = str.split('');
  const reversed = splited.reverse();
  const joined = reversed.join('');
  return joined;
}

// ('Second solution');
function withoutReverse(str) {
  result = '';
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverse('Vikas'));
console.log(withoutReverse('Gndec'));

// **************************** 2)Searching an index of a given in a given array
function search(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
}
console.log(search([1, 2, 3, 4, 5], 3));

// **************************** 3) finding the Factorial
function fac(num) {
  result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(fac(5));

// ***************************  4) finding Length of a longest word
function longestWord(str) {
  const split = str.split(' ');
  longest = '';
  for (const word of split) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest.length;
}
console.log(longestWord('hi im vikas shambhu'));

// **************************** 5)is given string is palindrome or not
function palindrome(str) {
  const reverse = str.split('').reverse().join('');
  if (reverse === str) return true;
  return false;
}
console.log(palindrome('racecar'));

// ******************************* 6)Finding largest number in 2D-Array
function largest(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var maxi = arr[i][0];
    for (var j = 0; j < arr[i].length; j++) {
      var currentMaxi = arr[i][j];
      if (currentMaxi >= maxi) {
        maxi = currentMaxi;
      }
    }
    result.push(maxi);
  }
  return result;
}
console.log(
  largest([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [10, 20, 30, -40],
  ])
);

// *********************************** 7) make first character to Upper Case
function titleCase(str) {
  const res = str
    .toLowerCase()
    .split(' ')
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    });
  return res.join(' ');
}
console.log(titleCase('im a vikas from india'));

// ************************************ 8) Given a string, reverse each word in the sentence
function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords('Hello World'));

// **************************************** 9) How to check if an object is an array or not
function isArray(obj) {
  return obj.constructor === Array;
}

console.log(isArray([1, 2, 3]));

// *************************************** 10) How would you check if a number is an integer?

function isInteger(num) {
  return num % 1 === 0;
}

console.log(isInteger(5));
