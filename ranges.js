// [1,21,5,19,10,2,6,15,20] => [[1,2],[5,6],10,15,[19,20,21]]

function ranges(arr) {
  function quickSort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const pivot = arr[Math.round(Math.random() * arr.length)];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    left = quickSort(left);
    right = quickSort(right);

    return [...left, ...right];
  }

  let sortedArr = quickSort(arr);
  
  const result = [];
  let range = [];

  for (let i = 0; i < sortedArr.length; i++) {
    range.push(sortedArr[i]);

    if (sortedArr[i] + 1 !== sortedArr[i + 1]) {
      result.push(range);
      range = [];
    }
  }

  return result.map((arr) => {
    if (arr.length > 2) {
      return [arr[0], arr[arr.length - 1]];
    }

    if (arr.length === 1) {
      return arr[0];
    }

    return arr;
  })
}

console.log(ranges([]));