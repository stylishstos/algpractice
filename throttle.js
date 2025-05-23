function throttle(fn, delay) {
  let pending, savedThis, savedArgs;

  return function wrapper(...args) {
    if (pending) {
      savedArgs = args;
      savedThis = this;

      return;
    };

    fn.apply(this, args);
    pending = true;

    setTimeout(() => {
      pending = false;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, delay);
  }
}