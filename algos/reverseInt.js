// reverse the int and return that num
// 123 => 321
// -500 => -5
// 820 => 28

// change num to string
// if first char is '-', keep first
// iterate from end of num
// if str is empty or only has '-', dont add 0
// otherwise add num
// return num

function reverseInt(num) {
  let numStr = num.toString();
  let result = '';

  if (numStr[0] === '-') {
    result += numStr[0];
  }

  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr[i] !== '-') {
      if (result[0] !== '-' || result[1]) {
        result += numStr[i];
      } else if (result[0] === '-' && !result[1]) {
        if (numStr[i] !== '0') {
          result += numStr[i];
        }
      }
    }
  }

  return parseInt(result);

}

console.log(reverseInt(123)); // 321
console.log(reverseInt(-500)); // -5
console.log(reverseInt(1534236469)); // 9646324351
