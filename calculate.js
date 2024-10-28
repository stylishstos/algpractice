function calculate(expression) {
    const arr = expression.split(' ');
    const stack = [];

    while (arr.length) {
        const el = arr.pop();

        if (isNaN(Number(el))) {
            const a = stack.pop();
            const b = stack.pop();

            stack.push(eval(`${a}${el}${b}`));
        } else {
            stack.push(el);
        }
    }

    return stack.pop();
}

console.log(calculate('+ 2 2'), 4);
console.log(calculate('* + 2 2 3'), 12);
console.log(calculate('/ + 3 5 * 2 2'), 2);
