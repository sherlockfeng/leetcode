/**
 * longest common substring
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @return string字符串
 */
function LCS(str1, str2) {
    // write code here
    const len1 = str1.length;
    const len2 = str2.length;

    let end = 0;
    let max = 0;

    const dp = [];
    for (let i = 0; i < len1; i++) {
        dp[i] = [];
    }

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = str1[i] === str2[j] ? 1 : 0;
                if (dp[i][j] > max) {
                    max = dp[i][j];
                    end = j;
                }
                continue;
            }
            if (str1[i] === str2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = 0;
            }
            if (dp[i][j] > max) {
                max = dp[i][j];
                end = j;
            }
        }
    }
    if (max === 0) {
        return -1;
    }
    const result = str2.substr(end - max + 1, end);
    // console.log(result);
    return result;
}

function LCS(str1, str2) {
    // write code here
    if (!str1 || !str2) {
        return -1;
    }
    if (str1.length > str2.length) {
        [str1, str2] = [str2, str1];
    }
    let result = '';
    let max = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1.slice(i - max, i + 1)) !== -1) {
            result = str1.slice(i - max, i + 1);
            max++;
        }
    }
    return result || -1;
}

console.log(LCS('1AB2345CD', '12345EF'));
