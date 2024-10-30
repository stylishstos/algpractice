// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
const getListNodeFromArr = (arr) => {
    const head = {
        val: arr.pop(),
        next: null,
    }

    let currNode = head;

    while(arr.length) {
        currNode.next = {
            val: arr.pop(),
            next: null,
        }

        currNode = currNode.next;
    }

    return head;
}

const l1 = getListNodeFromArr([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
const l2 = getListNodeFromArr([5,6,4]);

var addTwoNumbers = function(l1, l2) {
    const getBigIntFromListNode = (head) => {
        let curr = head;
        const res = [];

        while(curr) {
            res.push(curr.val);
            curr = curr.next;
        }

        return BigInt(res.reverse().join(''));
    }

    const getListNodeFromBigInt = (num) => {
        const arr = num.toString().split('');
        
        const head = {
            val: Number(arr.pop()),
            next: null,
        }

        let currNode = head;

        while(arr.length) {
            currNode.next = {
                val: Number(arr.pop()),
                next: null,
            }

            currNode = currNode.next;
        }

        return head;
    }

    const l1Value = getBigIntFromListNode(l1);
    const l2Value = getBigIntFromListNode(l2);

    return getListNodeFromBigInt(l1Value + l2Value);
};

console.log(addTwoNumbers(l1, l2))