/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const result = [];
    const path = [];
    if (!s) {
        return result;
    }
    const n = s.length;
    const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
    for (let j = 0; j < n; j++) {
        for (let i = 0; i <= j; i++) {
            if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
            }
        }
    }

    const dfs = start => {
        if (start === s.length) {
            return result.push([...path]);
        }

        for (let i = start; i < s.length; i++) {
            if (!dp[start][i]) {
                continue;
            }
            path.push(s.substring(start, i + 1));
            dfs(i + 1); // i作为参数传递下去，确保深一层的递归函数不从头遍历。
            path.pop();
        }
    };

    dfs(0);

    return result;
};

console.log(partition('google'));
