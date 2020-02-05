/**
 * https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/
 *
 * @file 1276-Number of Burgers with No Waste of Ingredients
 * @author heyunfeng
 */

/**
 * 1276-Number of Burgers with No Waste of Ingredients
 *
 * @param {number} tomatoSlices 番茄数量
 * @param {number} cheeseSlices 起司数量
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
    if (tomatoSlices < 2 * cheeseSlices || tomatoSlices > 4 * cheeseSlices) {
        return [];
    }
    const jumbo = (tomatoSlices - 2 * cheeseSlices) / 2;
    const jumboTemp = jumbo;
    if (Math.floor(jumbo) !== jumboTemp) {
        return [];
    }
    return [jumbo, cheeseSlices - jumbo];
};
