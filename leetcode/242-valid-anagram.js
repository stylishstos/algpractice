/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const freq = {};

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i)] = (freq[s.charCodeAt(i)] ?? 0) + 1;

        freq[t.charCodeAt(i)] = (freq[t.charCodeAt(i)] ?? 0) - 1;
    }

    return Object.values(freq).every((val) => val === 0);
};

console.log(isAnagram('anagram', 'nagaram'));
