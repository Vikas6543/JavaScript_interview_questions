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
function sorted(numbers) {
  const sortedNum = numbers.sort((a, b) => a - b);
  const [firstNum, secondNum] = sortedNum;
  return firstNum + secondNum;
}

// (Using For Loop) (Swap Method)
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
