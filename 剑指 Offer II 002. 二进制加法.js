// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
// var addBinary = function (a, b) {
//     let lenA = a.length - 1;
//     let lenB = b.length - 1;
//     let extro = 0;
//     let result = '';

//     while (lenA >= 0 || lenB >= 0) {
//         console.log('lenA:', lenA);
//         console.log('lenB:', lenB);
//         const A = +a[lenA];
//         const B = +b[lenB];
//         if (lenA < 0) {
//             console.log()
//             if (extro + B === 2) {
//                 result = `0${result}`;
//                 extro = 1;
//             } else {
//                 result = `${extro + B}${result}`;
//                 extro = 0;
//             }
//             lenB--;
//             continue;
//         }
//         if (lenB < 0) {
//             if (extro + A === 2) {
//                 result = `0${result}`;
//                 extro = 1;
//             } else {
//                 result = `${extro + A}${result}`;
//                 extro = 0;
//             }
//             lenA--;
//             continue;
//         }
//         if (A + B + extro === 3) {
//             result = `1${result}`;
//             console.log(3, result);
//             extro = 1;
//         } else if (A + B + extro === 2) {
//             result = `0${result}`;
//             console.log(2, result);
//             extro = 1;
//         } else {
//             result = `${A + B + extro}${result}`;
//             console.log(1, result);
//             extro = 0;
//         }
//         lenB--;
//         lenA--;
//     }

//     return extro ? `${extro}${result}` : result;
// };

// console.log(addBinary('1', '111'));

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let result = 0;
    const countOne = num => {
        let result = 0;
        for (const n of num) {
            if (n === '1') {
                result++
            }
        }
        return result;
    }
    for (let i = 0; i <=n; i++) {
        const a = i.toString(2);
        const num = countOne(a);
        result += num;
    }
    return result;
};

console.log(countBits(5));
