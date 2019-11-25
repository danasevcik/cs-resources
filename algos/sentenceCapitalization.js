// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// create an empty string
// iterate through the string
// if the char is a space, capitalize next letter
// return string

function capitalizeSentence(str) {
  let result = '';

  result += str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    let char = str[i];
    if (str[i - 1] === ' ') {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
}

console.log(capitalizeSentence('a big wind blows')) // A Big Wind Blows
console.log(capitalizeSentence('IS THIS WORKING?')) // Is This Working?
console.log(capitalizeSentence(' IS THIS WORKING?')) //  Is This Working?
