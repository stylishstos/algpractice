function debounce(fn, delay) {
  let timeoutId = null;

  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setTimeout(() => fn.apply(this, args), delay);
  }
}