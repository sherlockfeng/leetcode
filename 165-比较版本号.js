/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');

    const len = Math.max(v1.length, v2.length);

    let result = 0;

    for (let i = 0; i < len; i++) {
        const n1 = v1[i] ? + v1[i] : 0;
        const n2 = v2[i] ? + v2[i] : 0;

        if (result !== 0) {
            break;
        }

        if (n1 === n2) {
            continue;
        }

        if (n1 > n2) {
            result = 1;
            break;
        }
        result = -1;
        break;
    }
    return result;
};

compareVersion('7.5.2.4', '7.5.3');