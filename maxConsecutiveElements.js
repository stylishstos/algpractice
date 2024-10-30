function maxConsecutiveElements(str) {
  let res = 0;
  let currLetIdx = 0;

  while(currLetIdx < str.length) {
    let nextLetIdx = currLetIdx;

    while (nextLetIdx < str.length && str[nextLetIdx] === str[currLetIdx]) {
      nextLetIdx++;
    }

    res = Math.max(res, nextLetIdx - currLetIdx);
    currLetIdx = nextLetIdx;
  }

  return res;
}

console.log(maxConsecutiveElements('abcccdeeeeefgggg'));