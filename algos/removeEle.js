// given array and num
// remove all elements that match num
// return length of updated array

// iterate over arr
// if the ele matches num, splice
// at the end return arr.length

function removeEle(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    let currChar = arr[i];
    if (currChar === ele) {
      arr.splice(i, 1);
    }
  }

  return arr.length;
}

console.log(removeEle([1,2,3,4,2,3,4], 2)); // 5
console.log(removeEle([2], 2)); // 0
console.log(removeEle([2,3,2], 2)); // 1
