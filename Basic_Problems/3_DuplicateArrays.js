// Remove Dupliacte Values
('first logic')
const chars = ['A', 'B', 'A', 'C', 'B'];
const uniqueChars = [...new Set(chars)]
console.log(uniqueChars); // ['A', 'B', 'C']


('Second logic')
const chars = ['A', 'B', 'A', 'C', 'B'];
const uniqueChars = chars.filter((item, index) => {
  return chars.indexOf(item) === index;
});

console.log(uniqueChars); // ['A', 'B', 'C']


('Third logic')
const chars = ['A', 'B', 'A', 'C', 'B'];
const uniqueChars = [];
chars.forEach((item) => {
  if (!uniqueChars.includes(item)) {
    uniqueChars.push(item);
  }
});
 
console.log(uniqueChars); // ['A', 'B', 'C']



// Find Duplicate Values
const chars = ['A', 'B', 'A', 'C', 'B'];
const uniqueChars = chars.filter((item, index) => {
    return chars.indexOf(item) !== index
})

console.log(uniqueChars); // ['A', 'B']
