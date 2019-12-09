// convert roman numeral to int
// 'III' => 3
// 'IV' => 4
// "IX" => 9
// "LVIII" => 58

// create obj for roman numerals and corresponding numbers
// check if the current char and the next are a key in obj
// if not, add num for current char
// return number

function romanToInt(romanNum) {
  let romanIntObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  };

  let result = 0;

  for (let i = 0; i < romanNum.length; i++) {
    let char = romanNum[i];
    let next = romanNum[i + 1];
    console.log(char+next);
    if (romanIntObj[char + next]) {
      result += romanIntObj[char + next];
      i = i+1;
    } else {
      result += romanIntObj[char];
    }
  }

  return result;

}

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
