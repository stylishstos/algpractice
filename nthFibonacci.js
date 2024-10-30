// 0 1 1 2 3 5
function nthFibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let prev = 0;
  let curr = 1;
  let res = 0;

  for (let i = 2; i <= n; i++) {
    res = prev + curr;
    prev = curr;
    curr = res;
  }

  return res;
}