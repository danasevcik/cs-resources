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
  let output = [...arr];
  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    output[i] = rightProduct;
    rightProduct *= arr[i];
  }

  for (j = arr.length - 1; j >= 0; j--) {
    output[j] *= leftProduct;
    leftProduct *= arr[j];
  }

  return output;

}

console.log(productArr([1,2,3,4])); // [24,12,8,6]
