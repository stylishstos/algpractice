const sqr = (x) => x ** 2;
const sum = (a, b) => a + b;
const timesTwo = (x) => x * 2;
/** 
 * Реализовать функцию compose
 */
const compose = (...functions) => {
  const first = functions.pop();
  
  return function (...args) {
    return functions.reverse().reduce((res, fn) => {
      console.log({res, fn, 'fn(res)': fn(res)})
      return fn(res);
    }, first(...args))
  }
}

console.log(compose(sqr, timesTwo)(2), sqr(timesTwo(2)));
console.log(compose(sqr, timesTwo, sum)(3, 4), sqr(timesTwo(sum(3, 4))));