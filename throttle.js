function throttle(fn, delay) {
  let pending = false;

  return function(...args) {
    if (pending) return;

    pending = true;
    fn.apply(this, args);

    setTimeout(() => pending = false, delay);
  }
}