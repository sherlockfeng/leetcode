const score = n => {
    if (n === 1) {
        return 1;
    }
    //两个队伍 第一场比赛之前，分数为0
    let result = [0];
    // 每场比赛三种结果
    const s = [0, 1, 3];
    // 去重之后的值
    let num = 0;
    // n个队说明一只队伍要踢有n-1场比赛
    for (let i = 1; i < n; i++) {
        const temp = [];
        // 循环三种结果
        for (let j = 0; j < 3; j++) {
            result.forEach(data => {
                // result 存放的是到i场比赛之前，所有可能的分数，所以加一场之后，就变成result的长度乘以3这么多种分数
                temp.push(s[j] + data);
            })
        }
        // 算完第i场之后，把结果赋值result
        result = temp;
    }
    const flag = {};
    // 去重
    for (let k = 0; k < result.length; k++) {
        if (!flag[result[k]]) {
            flag[result[k]] = true;
            num++;
        }
    }
    return num;
};

console.log(score(30));
