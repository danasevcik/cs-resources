// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// create fib array
// loop from 0 to num
// if 0 or 1, add n to the arr
// otherwise, add n-1 and n-2 together
// print out the n number of fib

// function fibonacci(n) {
//   let fibArr = [];
//
//   for (let i = 0; i <= n; i++) {
//     if (i === 0  || i === 1) {
//       fibArr.push(i);
//     } else {
//       fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
//     }
//   }
//
//   return fibArr[n];
// }
//
// console.log(fibonacci(4)) // 3
// console.log(fibonacci(5)) // 5
// console.log(fibonacci(6)) // 8
// console.log(fibonacci(7)) // 13
// console.log(fibonacci(8)) // 21

// recursive solution
// start with array and have base case be 0 or 1
// otherwise, call fib with n-1 and n-2

// function fibRecursive(n) {
//   if (n === 0 || n === 1) {
//     return n;
//   } else {
//     return fibRecursive(n - 1) + fibRecursive(n - 2);
//   }
// }

// console.log(fibRecursive(4)) // 3
// console.log(fibRecursive(5)) // 5
// console.log(fibRecursive(6)) // 8
// console.log(fibRecursive(7)) // 13
// console.log(fibRecursive(8)) // 21

// if there is not a cache object, create an empty obj
// if there is a value in the obj at key n, return that value
// base case if n is 0 or 1
// return the value of the cache obj at key n of n - 1 + n - 2

function fibMemoize(n, cache) {

  cache = cache || {}

  if (cache[n]) {
    return cache[n]
  }

  if (n <= 1) {
    return n
  }

  return cache[n] = fibMemoize(n - 1, cache) + fibMemoize(n - 2, cache)
}
console.log(fibMemoize(4)) // 3
console.log(fibMemoize(5)) // 5
console.log(fibMemoize(6)) // 8
console.log(fibMemoize(7)) // 13
console.log(fibMemoize(8)) // 21
