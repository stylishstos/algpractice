class Trie {
    insert(str, additional) {
        let currentKey = this;

        for (let char of str) {
            if (currentKey[char]) {
                currentKey = currentKey[char];
                continue;
            }

            currentKey[char] = {};
            currentKey = currentKey[char];
        }

        currentKey.isValue = additional;
    }

    srearch(str) {
        let currentKey = this;

        for (let char of str) {
            if (currentKey[char]) {
                currentKey = currentKey[char];
                continue;
            }
        }

        return currentKey.isValue;
    }
}

const trie = new Trie();

const dictionary = [['test', 'test']];

for (let [val, additional] of dictionary) {
    trie.insert(val, additional);
}

console.dir(trie, { depth: null });
console.log(trie.srearch('te123st123'));
