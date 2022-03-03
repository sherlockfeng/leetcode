/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let start = 0;
    const base = {};
    let result = false;
    for (const n of s1) {
        if (base[n]) {
            base[n] += 1;
        } else {
            base[n] = 1;
        }
    }

    console.log('base', base);

    while (start < s2.length) {
        const flag = {...base};
        let letter = s2[start];
        let s = start;
        while (flag[letter]) {
            flag[letter] -= 1;
            start++;
            letter = s2[start];
        }
        if (!Object.values(flag).filter(num => !!num).length) {
            result = true;
            break;
        }
        start = s + 1;
    }
    return result;
};

console.log(checkInclusion('adc', 'dcda'));
