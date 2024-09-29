// const same = (arr1, arr2) =>
//   arr1
//     .sort((a, b) => a - b)
//     .map((el) => el ** 2)
//     .join("") === arr2.sort((a, b) => a - b).join("");
// console.log(same([2, 2, 3], [4, 4, 9]));

// const anagram = (str1, str2) =>
//   str1.split("").sort().join("") === str2.split("").sort().join("");
// console.log(anagram("aacc", "ccaa"));

// const sumZero = (arr) => {
//   const num = arr.find((el, i) =>
//     arr.slice(i + 1).find((el2) => el + el2 === 0)
//   );
//   if (!num) return null;
//   return [num, -num];
// };
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// const countUniqueValues = (arr) =>
//   arr.reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), [])
//     .length;
// console.log(countUniqueValues([]));

// prettier-ignore
// const maxSubarraySum = (arr, n) => arr.reduce((acc, _, i) => (arr[i + n - 1] ? Math.max(acc, arr.slice(i, i + n).reduce((acc, cur) => acc + cur)) : acc), -Infinity);
// console.log(maxSubarraySum([100, 200, 300, 400, 201], 3));
