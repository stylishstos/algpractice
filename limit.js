/**
 * Реализовать функцию обертку для ограниченного вызова
 * при достижении limit срабатывает callback
 * больше определенного количества функцию вызвать нельяз
 * можно сбросить через метод reset() которая возвращает обертка
 */
const limitWrapper = (fn, limit, callback) => {
  let callCount = 0;

  wrapper.reset = function() {
    callCount = 0;
  }

  function wrapper(...args) {
    if (callCount >= limit) return;

    callCount++;

    const res = fn(...args);

    if (callCount === limit && callback) {
      callback();
    }

    return res;
  }

  return wrapper;
}

const limitConsoleHandler = (a,b) => {
    console.log('A, B: ', a,b)
}

const consoleLimit = limitWrapper(limitConsoleHandler, 2, () => console.log('success'))

consoleLimit(1,2)
// A, B: 1,2
consoleLimit(3,4)
// A, B: 3, 4
// success
consoleLimit(5,6) // не выполнится
consoleLimit.reset();
consoleLimit(5,6)
// A, B: 5, 6
consoleLimit(7,8)
// A, B: 7, 8
// success