const insertionSearch = arr => {
  var iterations = 0;

  for (var i = 1; i < arr.length; i++) {
    var curVal = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j];

      iterations++;
    }

    arr[j + 1] = curVal;
  }

  return { arr, iterations };
};
console.log(insertionSearch([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1]));
// console.log(insertionSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
