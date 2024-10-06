const selectionSort = arr => {
  let iterations = 0;

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
      iterations++;
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return { iterations, arr };
};
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1]));
