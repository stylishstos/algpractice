// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]

// Input: lists = []
// Output: []

// Input: lists = [[]]
// Output: []
 
function merge(lists) {
    function concat(alist, blist) {
        const res = [];

        for (i = 0, j = 0; i < alist.length && j < blist.length;) {
            if (alist[i] < blist[j]) {
                res.push(alist[i]);
                i++;
            } else {
                res.push(blist[j]);
                j++;
            }
        }

        if (alist.length) {
            res.push(...alist.slice(i));
        }

        if (blist.length) {
            res.push(...blist.slice(j));
        }

        return res;
    }

    while(lists.length > 1) {
        lists.push(concat(lists.pop(), lists.pop()));
    }

    return lists[0] || [];
}

console.log(merge([[1,4,5],[1,3,4],[2,6]]));
console.log(merge([[]]));
console.log(merge([]));