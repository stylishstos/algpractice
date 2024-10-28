function flatten(arr) {
    const res = [];
    const stack = [...arr];

    while (stack.length) {
        const el = stack.shift();

        if (Array.isArray(el)) {
            stack.unshift(...el);
        } else {
            res.push(el);
        }
    }

    return res;
}

console.log(flatten([[1], 2, [3, 4, [5]], 6]));
console.log(flatten([[1], 2, [3, [[[4]]], [null], [5]], 6]));
