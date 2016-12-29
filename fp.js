const FP = {
  // Iterate over each element of an array, possibly modifying the array
  each(arr, fn) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      fn(arr[i], i, arr);
    }
  },

  // Map a function over the elements of an array, producing a new array
  map(arr, fn) {
    const newArr = [];
    FP.each(arr, (elem, idx, arr2) => {
      newArr.push(fn(elem, idx, arr2));
    });
    return newArr;
  },

  // Reduce an array to a single value
  reduce(arr, fn, accumulator) {
    const len = arr.length;
    let idx = 0;
    let accum = accumulator;
    if (!accum && len > 0) {
      accum = arr[idx++];
    }
    for (; idx < len; idx++) {
      accum = fn(accum, arr[idx], idx, arr);
    }
    return accum;
  },

  // Filter an array to remove unwanted values, producing a new array
  filter(arr, predicate) {
    const newArr = [];
    FP.each(arr, (elem, idx, arr2) => {
      if (predicate(elem, idx, arr2)) {
        newArr.push(elem);
      }
    });
    return newArr;
  },
};

module.exports = FP;
