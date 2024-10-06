const badBubbleSort = arr => {
  let iterations = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      iterations++;
    }
  }
  return { arr, iterations };
};
// console.log(badBubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1]));

const goodBubbleSort = arr => {
  let iterations = 0;
  let noSwaps = true;

  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }

      iterations++;
    }

    if (noSwaps) break;
  }

  return { arr, iterations };
};
console.log(goodBubbleSort([10, 1, 2, 3, 4, 5, 6, 7, 8]));
