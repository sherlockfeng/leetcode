function twoSum(numbers, target) {
    if (numbers.length < 2) {
        return [];
    }
    const result = [];
    for (let i = 0; i < numbers; i++) {
        const t = target - numbers[i];
        console.log('t', t);
        console.log('i', i);
        for (let j = i + 1; j < numbers; j++) {
            console.log('j', j);
            console.log('j num', numbers[j]);
            if (numbers[j] === t) {
                result.push(i + 1);
                result.push(j + 1);
                break;
            }
        }
        if (result.length) {
            break;
        }
    }
    console.log('result', result);
    return result;
}

twoSum([3, 2, 4], 6);
