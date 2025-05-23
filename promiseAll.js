Promise.prototype.all = function(arr) {
  const result = (new Array(arr.length)).fill(null);

  return new Promise((res, rej) => {
    arr.forEach((promise, index) => {
      promise.then((res) => {
        result[index] = res;

        if (result.every(Boolean)) {
          res(result);
        }
      }).catch((e) => {
        rej(e);
      })
    })
  });
}