/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    // let max = 0;
    // const compare = (left, right) => {
    //     for (let i = 0; i < left.length; i++) {
    //         if (right.includes(left[i])) {
    //             return 0;
    //         }
    //     }
    //     return left.length * right.length;
    // };
    // for (let i = 0; i < words.length; i++) {
    //     for (let j = i + 1; j < words.length; j++) {
    //         const left = words[i];
    //         const right = words[j];
    //         const r = compare(left, right);
    //         max < r && (max = r);
    //     }
    // }
    // return max;
    const bitmaskMap = new Map();
    for (let i = 0; i < words.length; i++) {
        let bitmask = 0;
        for (const c of words[i]) {
            bitmask |= 1 << (c.charCodeAt() - 'a'.charCodeAt());
            console.log(bitmask);
            console.log(bitmaskMap);
        }
        if (bitmaskMap.has(bitmask)) {
            bitmaskMap.set(bitmask, Math.max(bitmaskMap.get(bitmask), words[i].length));
        } else {
            bitmaskMap.set(bitmask, words[i].length);
        }
    }

    let ans = 0;
    for (const x of bitmaskMap.keys()) {
        for (const y of bitmaskMap.keys()) {
            if ((x & y) == 0) {
                ans = Math.max(ans, bitmaskMap.get(x) * bitmaskMap.get(y));
            }
        }
    }

    return ans;
};

const words = ["abcw","baz","foo","bar","fxyz","abcdef"];

console.log(maxProduct(words));
