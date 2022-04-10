// **************************** 1) arrange string in Alphabetical order
const alpha = (str) => {
  return str.split('').sort().join('');
};

console.log(alpha('vikas'));

// ***************************** 2) Count the number of vowels in a string
const vowels = (str) => {
  const letters = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter((item) => letters.indexOf(item) > -1).length;
};

console.log(vowels('vikas'));

// ****************************  3)find character which is not repeated
const strNotRepeated = (str) => {
  return str.split('').filter((item, index, arr) => {
    return arr.filter((arrItem) => arrItem === item).length === 1;
  });
};

console.log(strNotRepeated('vvvikkaaas'));

// ******************************** 4) finding Most used character in string
function mostUsedChar(str) {
  let charMap = {};
  let maxNum = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(mostUsedChar('helloo'));

// ******************************  5) checking which two numbers adds to get 0 output
function checkZero(arr) {
  for (var ele of arr) {
    for (var j = 1; j < arr.length; j++) {
      if (ele + arr[j] === 0) {
        return [ele, arr[j]];
      }
    }
  }
}

console.log(checkZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));

// ******************************** 6) Remove every second element in an array
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let result = nums.filter((item, index) => (index + 1) % 2 !== 0);

// ******************************* 7) Remove Dupliacte Values from an Array
// (first logic);
const char = ['A', 'B', 'A', 'C', 'B'];
const setChars = [...new Set(chars)];
console.log(setChars);

// (Second logic);
const chars = ['A', 'B', 'A', 'C', 'B'];
const filterChars = chars.filter((item, index) => {
  return chars.indexOf(item) === index;
});

console.log(filterChars);

// (Third logic);
const res = ['A', 'B', 'A', 'C', 'B'];
const eachChars = [];
res.forEach((item) => {
  if (!eachChars.includes(item)) {
    eachChars.push(item);
  }
});

console.log(eachChars);

// ******************************* 8) Find Duplicate Values in an Array
const chars = ['A', 'B', 'A', 'C', 'B'];
const uniqueChars = chars.filter((item, index) => {
  return chars.indexOf(item) !== index;
});

console.log(uniqueChars);

// ******************************* 9) Find the missing number in an given array
function missingNum(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr);
  const expectedSum = (arr.length * (arr.length + 1)) / 2;
  return expectedSum - sum;
}

console.log(missingNum([0, 1, 2, 4, 5]));

// ******************************** 10) sort an array by Value & by Name
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort((a, b) => {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  return 1;
});

console.log(items);
