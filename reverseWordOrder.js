function reverseWordOrder(str) {
  function split(s, divider) {
    const res = [];

    for(let i = 0; i < s.length;) {
      for (let j = i; j < s.length; j++) {
        if (s[j] === divider) {
          res.push(s.slice(i, j));
          i = j + 1;
        } else if (j + 1 === s.length) {
          res.push(s.slice(i));
          i = j + 1;
        }
      }
    }

    return res;
  }

  function reverse(arr) {
    const res = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      res.push(arr[i])
    }

    return res;
  }

  function join(arr, divider) {
    let str = '';

    for(let i = 0; i < arr.length; i++) {
      if (i > 0) {
        str += divider;
      }

      str += arr[i];
    }

    return str;
  }

  return join(reverse(split(str, ' ')), ' ');
}

console.log('строка которую нужно обработать =>', reverseWordOrder('строка которую нужно обработать'));

// str.split(' ').reverse().join(' ');