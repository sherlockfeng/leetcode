/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let start = 1;
    let end = Math.max(...piles) + 1;

    const eatAll = k => {
        let result = 0;
        for (const pile of piles) {
            result += Math.ceil(pile / k);
        }
        return result;
    };

    while (start < end) {
        const mid = (start + end) >> 1;
        if (eatAll(mid) > h) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
console.log(minEatingSpeed([312884470], 312884469)); // 312884470
