// 1)return a given string in Alphabetical order
const alpha = (str) => {
  return str.split('').sort().join('');
};
console.log(alpha('vikas'));

// 2)Count the number of vowels in a string
const vowels = (str) => {
  const letters = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter((item) => letters.indexOf(item) > -1).length;
};
console.log(vowels('vikas'));

// 3)Extract all unique characters from a string
const unique = (str) => {
  return [...new Set(str)];
};
console.log(unique('vvvikkaaas'));

// 4)find character which is not repeated
const strNotRepeated = (str) => {
  return str.split('').filter((item, index, arr) => {
    return arr.filter((arrItem) => arrItem === item).length === 1;
  });
};
console.log(strNotRepeated('vvvikkaaas'));

// 5) to find Most used character in string
const countingChars = (str) => {
  const charCount = {}; //Step 0
  let maxCharCount = 0;
  let maxChar = '';
  for (let i = 0; i < str.length; i++) {
    // Step 1.
    charCount[str[i]] = ++charCount[str[i]] || 1;
  }

  for (let key in charCount) {
    //Step 2
    if (charCount[key] >= maxCharCount) {
      maxCharCount = charCount[key]; //Step 3
      maxChar = key;
    }
  }

  return maxChar; //Step 4
};

console.log(countingChars('apple'));

// 6) checking which two numbers adds to get 0 output
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

// Remove every second element in an array
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let result = nums.filter((item, index) => (index + 1) % 2 !== 0);
