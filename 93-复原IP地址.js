// /**
//  * @param {string} s
//  * @return {string[]}
//  */
// var restoreIpAddresses = function(s) {
//     const result = [];
//     const dfs = (sub, start) => {
//         if (sub.length === 4 && start < s.length) {
//             return;
//         }
//         if (sub.length === 4 && start === s.length) {
//             result.push(sub.join('.'));
//             return;
//         }
//         for (let i = 1; i < 4; i++) {
//             if (start + i > s.length) {
//                 break;
//             } 
//             const str = s.substring(start, start + i);
//             if (i === 3 && +str > 255) {
//                 break;
//             }
//             if (i !== 1 && s[start] === '0') {
//                 break;
//             }
//             sub.push(str);
//             dfs(sub, start + i);
//             sub.pop();
//         }
//     }
//     dfs([], 0);
//     return result;
// };

// restoreIpAddresses('1111');

console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end') 
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')

