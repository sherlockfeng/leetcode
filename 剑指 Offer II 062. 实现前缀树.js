/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let cur = this.root;
    for (const w of word) {
        if (!cur[w]) {
            cur[w] = {};
        }
        cur = cur[w];
    }
    cur.end = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let cur = this.root;

    for (const w of word) {
        if (!cur[w]) {
            return false;
        }
        cur = cur[w];
    }
    return !!cur.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let cur = this.root;

    for (const w of prefix) {
        if (!cur[w]) {
            return false;
        }
        cur = cur[w];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
