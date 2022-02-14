// ES6 Version
var givenArray = [5, 1, 99, 25];
// 1) ascending order
givenArray.sort((a, b) => {
  return a - b;
});
// 2) descending order
givenArray.sort((a, b) => {
  return b - a;
});

// sorts an array alphabetically
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const result = fruits.sort();

// get the smallest two numbers & add first two numbers
function sorted(numbers) {
  const sortedNum = numbers.sort((a, b) => a - b);
  const [firstNum, secondNum] = sortedNum;
  return firstNum + secondNum;
}

// Using For Loop (Swap Method)
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
