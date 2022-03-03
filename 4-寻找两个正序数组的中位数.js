/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const c = n => Math.floor(n / 2);
    const getKthElement = (k, num1, num2) => {
        let index1 = 0;
        let index2 = 0;
        let len1 = num1.length;
        let len2 = num2.length;

        while (true) {
            if (index1 === len1) {
                return num2[index2 + k - 1];
            }

            if (index2 === len2) {
                return num1[index1 + k - 1];
            }

            if (k === 1) {
                return Math.min(num1[index1], num2[index2]);
            }

            const half = c(k);
            const newIndex1 = Math.min(index1 + half, len1) - 1;
            const newIndex2 = Math.min(index2 + half, len2) - 1;

            const p1 = num1[newIndex1];
            const p2 = num2[newIndex2];

            if (p1 <= p2) {
                k = k - (newIndex1 - index1 + 1);
                index1 = newIndex1 + 1;
            } else {
                k = k - (newIndex2 - index2 + 1);
                index2 = newIndex2 + 1;
            }

            // console.log('k', k);
            // console.log('index1', index1);
            // console.log('index2', index2);
        }
    };

    const length1 = nums1.length;
    const length2 = nums2.length;
    const totalLength = length1 + length2;
    if (totalLength % 2 === 1) {
        const midIndex = c(totalLength);
        return getKthElement(midIndex + 1, nums1, nums2);
    }
    const midIndex1 = c(totalLength);
    const midIndex2 = c(totalLength) + 1;

    console.log('midIndex1', midIndex1);
    console.log('midIndex2', midIndex2);

    console.log(getKthElement(midIndex1, nums1, nums2));
    console.log(getKthElement(midIndex2, nums1, nums2));

    return (getKthElement(midIndex1, nums1, nums2) + getKthElement(midIndex2, nums1, nums2)) / 2;
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
