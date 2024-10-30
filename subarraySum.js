function subarraySum(positiveArr, x) {
  for (let left = 0; left < positiveArr.length; left++) {
    let sum = 0;
    let right = 0;

    if (left > 0) {
      sum -= positiveArr[left - 1];
    }

    while(right < positiveArr.length && sum < x) {
      sum += positiveArr[right];
      right++;
    }

    if (sum === x) {
      return true;
    }
  }
}