/**
 * https://leetcode.com/problems/gas-station/
 *
 * @file 134-Gas Station.js
 * @author heyunfeng
 */

/**
 * Gas Station
 *
 * @param {number[]} gas 加油站存油量
 * @param {number[]} cost 路程花费
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {

    for (let i = 0; i < gas.length; i++) {
        let tank = 0;
        if (gas[i] - cost[i] >= 0) {
            let j = i + 1;
            if (i === gas.length - 1) {
                j = 0;
            }
            tank = gas[i] - cost[i];
            let failed = false;
            while (j !== i) {
                tank = tank + gas[j] - cost[j];
                if (tank >= 0) {
                    if (j === gas.length - 1) {
                        j = 0;
                    }
                    else {
                        j++;
                    }
                }
                else {
                    failed = true;
                    break;
                }
            }
            if (!failed) {
                return i;
            }
        }
    }

    return -1;
};

/**
 * Gas Station
 *
 * @param {number[]} gas 加油站存油量
 * @param {number[]} cost 路程花费
 * @return {number}
 */

var canCompleteCircuit = function (gas, cost) {
    const len = gas.length;

    let tank = 0;
    let s = 0;
    let diff = 0;
    for (let i = 0; i < len; i++) {
        tank = gas[i] - cost[i] + tank;
        if (tank < 0) {
            s = i + 1;
            diff = diff + tank;
            tank = 0;
        }
    }

    return tank + diff >= 0 ? s : -1;
};
