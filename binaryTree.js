class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (!this.root) {
            this.root = new Node(value);
            return this;
        }

        let currNode = this.root;

        while (currNode) {
            if (currNode.value > value) {
                if (currNode.left) {
                    currNode = currNode.left;
                } else {
                    currNode.left = new Node(value);

                    return this;
                }
            } else {
                if (currNode.right) {
                    currNode = currNode.right;
                } else {
                    currNode.right = new Node(value);

                    return this;
                }
            }
        }
    }

    preOrder(node, cb) {
        if (!node) return;

        if (cb) {
            cb(node);
        }

        this.preOrder(node.left, cb);
        this.preOrder(node.right, cb);
    }

    inOrder(node, cb) {
        if (!node) return;

        this.inOrder(node.left, cb);

        if (cb) {
            cb(node);
        }

        this.inOrder(node.right, cb);
    }

    postOrder(node, cb) {
        if (!node) return;

        this.postOrder(node.left, cb);
        this.postOrder(node.right, cb);

        if (cb) {
            cb(node);
        }
    }

    traverseDFS(cb, type) {
        switch (type) {
            case 'preOrder':
                return this.preOrder(this.root, cb);
            case 'inOrder':
                return this.inOrder(this.root, cb);
            default:
                return this.postOrder(this.root, cb);
        }
    }

    traverseDFSStack(cb, type) {
        switch (type) {
            case 'preOrder':
                return this.preOrderStack(this.root, cb);
            case 'inOrder':
                return this.inOrderStack(this.root, cb);
            default:
                return this.postOrderStack(this.root, cb);
        }
    }

    preOrderStack(node, cb) {
        const stack = [];
        let currNode = node, prevNode;

        while(currNode || stack.length) {
            if (currNode) {
                cb(currNode);
                stack.push(currNode);
                currNode = currNode.left;
            } else {
                prevNode = stack.pop();
                currNode = prevNode.right;
            }
        }
    }

    inOrderStack(node, cb) {
        const stack = [];
        let currNode = node, prevNode;

        while(currNode || stack.length) {
            if (currNode) {
                stack.push(currNode);
                currNode = currNode.left;
            } else {
                prevNode = stack.pop();
                cb(prevNode);
                currNode = prevNode.right;
            }
        }
    }

    postOrderStack(node, cb) {
        const stack = [];
        const rightStack = [];
        let currNode = node;

        while(currNode || stack.length) {
            if (currNode) {
                if (currNode.right) {
                    rightStack.push(currNode.right);
                }
                stack.push(currNode);
                currNode = currNode.left;
            } else {
                if (rightStack.length && stack[stack.length - 1].right === rightStack[rightStack.length - 1]) {
                    currNode = rightStack.pop();
                } else {
                    cb(stack.pop());
                }
            }
        }
    }

    traverseBFS(cb) {
        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();
            cb(node);

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
}

const tree = new BinaryTree();
tree.add(8).add(5).add(6).add(2).add(10).add(20).add(9);

// console.dir(tree, { depth: null });

// tree.traverseDFS((node) => console.log(node.value), 'preOrder');
// console.log('-')
// tree.traverseDFSStack((node) => console.log(node.value), 'preOrder');

// tree.traverseDFS((node) => console.log(node.value), 'inOrder');
// console.log('-')
// tree.traverseDFSStack((node) => console.log(node.value), 'inOrder');


// tree.traverseDFS((node) => console.log(node.value), 'postOrder');
// console.log('-')
// tree.traverseDFSStack((node) => console.log(node.value), 'postOrder');

// tree.traverseBFS((node) => console.log(node.value));
