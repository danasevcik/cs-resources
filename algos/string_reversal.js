// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// option 1 - use .reverse()
// option 2 - iterate from end of the string

// split the string to create array
// reverse
// join to create string
function reverseStr(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStr('hello'));
