const calc = (num: number, total: number) => {
    const dp = [0, 1, total + 1];
    return dp[num];
};

console.log(2)