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

function reverseStr2(str) {
  let resultStr = ''
  for(let i = str.length - 1; i >= 0; i--) {
    resultStr += str[i];
  }
  return resultStr;
}

console.log(reverseStr2('hello'));
