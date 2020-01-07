// given an array of numbers
// return the most common number
// if there is a tie, return the lower number

// loop through all of the items in the arr
// create a count obj
// also have a highest num and count key which keeps track of the highest
// return the highest num

function mostCommon(arr) {
  let count = {
    highestCount: 0,
    highestNum: null
  };

  let sortedArr = arr.sort()

  for (let i = 0; i < sortedArr.length; i++) {
    let num = sortedArr[i];

    if (count[num]) {
      count[num]++
      if (count[num] > count.highestCount) {
        count.highestCount = count[num];
        count.highestNum = num;
      }
    } else if (!count[num]) {
      count[num] = 1;
      if (count[num] > count.highestCount) {
        count.highestCount = count[num];
        count.highestNum = num;
      }
    }
  }

  return count.highestNum;
}

console.log(mostCommon([1,1,1,2])); // 1
console.log(mostCommon([1,1,1,2,2,2,2,2,2])); // 2
console.log(mostCommon([3,4])); // 3
console.log(mostCommon([4,3])); // 3
console.log(mostCommon([3,1,1,1])); // 1
