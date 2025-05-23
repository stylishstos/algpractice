function generate(n) {
    const result = [];

    function generate_(lopen, lclose, acc) {
        if (!lopen && !lclose) {
            result.push(acc);
        }

        if (lopen) {
            generate_(lopen - 1, lclose, acc + '(');
        }

        if (lclose > lopen) {
            generate_(lopen, lclose - 1, acc + ')');
        }
    }

    generate_(n, n, '');

    return result;
}

console.log(generate(5));