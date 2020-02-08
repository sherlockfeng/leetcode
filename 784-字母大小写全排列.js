/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let result = [];
    const Rex = /[a-zA-Z]/;
    const dfs = (str, index) => {
        if (index === S.length) {
            result.push(str);
            return;
        }
        if (Rex.test(S[index])) {
            let temp = str.substring(0, index) + str[index].toUpperCase() + str.substring(index + 1);
            let temp1 = str.substring(0, index) + str[index].toLowerCase() + str.substring(index + 1);
            dfs(temp1, index + 1);
            dfs(temp, index+ 1);
        }
        else {
            dfs(str, index + 1);
        }
    }
    dfs(S, 0);
    return result;
};
