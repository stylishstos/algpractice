function queueTime(customers, n) {
    const queue = [...customers];
    const tills = Array(Math.min(customers.length, n)).fill(0);

    if (!customers.length) return 0;

    while (queue.length) {
        const freeTillIndex = tills.indexOf(Math.min(...tills));
        tills[freeTillIndex] += queue.shift();
    }

    return Math.max(...tills);
}

console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
