// const addUpToRecursion = (sum) => {
//   if (sum < 1) return null;
//   if (sum === 1) return 1;
//   return sum + addUpToRecursion(sum - 1);
// };
// console.log(addUpToRecursion(100));

// const factorial = (n) => {
//   if (n < 1) return null;
//   if (n === 2) return 2;
//   return n * factorial(n - 1);
// };
// console.log(factorial(10));

// const odd = (arr) => {
//   let newArr = [];
//   if (arr.length === 0) return newArr;
//   if (arr[0] % 2 !== 0) newArr.push(arr[0]);
//   return newArr.concat(odd(arr.slice(1)));
// };
// console.log(odd([1, 2, 3, 4, 5, 6]));
