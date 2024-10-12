const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    pivotIndex = pivot(arr, left, right);

    left = quickSort(arr, left, pivotIndex - 1);
    right = quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

console.log(quickSort([3, 2, 1, 4, 5]));
