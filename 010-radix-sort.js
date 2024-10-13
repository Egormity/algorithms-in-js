const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const getNumLength = num => (num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1);

const getMostNumLength = arr => arr.reduce((prev, cur) => Math.max(prev, getNumLength(cur)), 0);

const radixSort = arr => {
  for (let i = 0; i < getMostNumLength(arr); i++) {
    const store = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    };

    for (let j = 0; j < arr.length; j++) {
      store[getDigit(arr[j], i)].push(arr[j]);
    }

    arr = Object.values(store).flat();
  }

  return arr;
};
console.log(radixSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1]));
