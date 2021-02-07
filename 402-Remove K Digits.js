/**
 * https://leetcode.com/problems/remove-k-digits/
 *
 * @file 402-Remove K Digits
 * @author heyunfeng
 */

/**
 * Remove K Digits
 *
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
    const helper = (s, k) => {
        if (k === 0) {
            return s;
        }
        if (k === 1 && s.length === 1) {
            return '0';
        }
        const stack = [s[0]];
        let result = s;
        for (let i = 1; i < s.length; i++) {
            if (+s[i] < +stack[stack.length - 1]) {
                result = s.slice(0, i - 1) + s.slice(i);
                break;
            }
            stack.push(s[i]);
            if (i === s.length - 1) {
                result = s.slice(0, i) + s.slice(i + 1);
                break;
            }
        }
        return helper(result, --k);
    };
    let result = helper(num, k);
    let flag = true;
    while (flag && result.length > 1) {
        if (result[0] === '0') {
            result = result.slice(1);
        }
        else {
            flag = false;
        }
    }
    return result ? result : '0';
};

// eslint-disable-next-line
// console.log(removeKdigits('996414363788153611534713021581934201828636847894114849949764848271145953346100425440564423705308160608336170309768131340987930561551032020085493444465193544083073070710550651127384420202284715693947961741503230801612259019643388373415242532432185095002546192236830917993656777205823895681565852256661971230933778711000024814024862198372554113821624993211934165249722752734719691558487424574765564337372811477100217812101347653217612856122765119173245525855698821566350946703626535675961447286537950070232309338175661044886376964501660879051008236994257987635984443260693570528423799185358552969157600544593174335218787781718110810765931666630909480297931136268524627123881164837747134261839114812308843935942493318281655037982696342444307736930338827080002496328501487998593220246931465776355431146576624189988605175259891929732507016317655984650530976168048173443438950167245619478608361175049157970111851326742552782365977460421387684737230598259483015657194376107329076625454990429534998668137411', 1000));
console.log(removeKdigits('1432219', 3));
// console.log(removeKdigits('10200', 1));
// console.log(removeKdigits('10', 2));
