// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// create a hash of vowels
// iterate through string
// if the char is a vowel, incrememnt counter

function vowelCount(str) {
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  let numOfVowels = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (vowels[char]) {
      numOfVowels++;
    }
  }

  return numOfVowels;
}

console.log(vowelCount('hiii')) // 3
console.log(vowelCount('hey how are you')) // 6
