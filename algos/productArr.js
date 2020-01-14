// given an arr of integers
// return an arr where each element is the product of all the other numbers aside from itself
// input: [1,2,3,4]
// output: [24,12,8,6]

// create output arr
// iterate to the right of i
// push product into output and multiply by all the other nums
// iterate to the left of i
// push product into output and multiply by all the other nums
// return output arr

function productArr(arr) {
  // copy arr
  let output = [...arr];
  let leftProduct = 1;
  let rightProduct = 1;

  // iterate left of the number
  // mult each number with the left product
  for (let i = 0; i < arr.length; i++) {
    output[i] = leftProduct;
    leftProduct *= arr[i];
  }

  // iterate right of the number
  // mult each number with the right product
  for (j = arr.length - 1; j >= 0; j--) {
    output[j] *= rightProduct;
    rightProduct *= arr[j];
  }

  return output;

}

console.log(productArr([1,2,3,4])); // [24,12,8,6]
