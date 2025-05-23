const asyncIterator = {
  limit: 5,
  url: '',
  [Symbol.asyncIterator]: function () { 
    let count = 0;   
    return {
      next() {
        const done = count > this.limit;

        return done ?
          Promise.resolve({ value: undefined, done: true})
          : new Promise((resolve) => {
              count++;

              fetch(this.url).then((value) => {
                resolve({ value, done: true })
              },
              () => {
                resolve({ value: undefined, done: false })
              })
            })
      }
    }
  }
}