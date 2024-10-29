function lbinSearch(l, r, check, ...params) {
  while(l < r) {
    const m = Math.floor((l + r) / 2);

    if (check(m, ...params)) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
}

function rbinSearch(l, r, check, ...params) {
  while(l < r) {
    const m = Math.ceil((l + r) / 2);

    if (check(m, ...params)) {
      l = m;
    } else {
      r = m - 1;
    }
  }

  return l;
}

function check(m, ...params) {
  const [n, k] = params;

  return (k + m) * 3 >= n + m;
}

const total = 18;
const parents = 3;

console.log(lbinSearch(0, total, check, total, parents));
