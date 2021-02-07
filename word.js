const long = words => {
    const dict = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // 结果数组
    const result = [];
    // 寻找方法 第一个是要找的字母，第二个参数是剩下的数组
    const findNext = (word, words) => {
        // 如果剩下的为空了，则结束
        if (!words.length) {
            return;
        }

        // 循环遍历单词数组
        for (let i = 0; i < words.length; i++) {
            // 如果正确匹配 既首字母是word js 字符串可以按数组，直接取 'abc'[0]就是a
            if (words[i][0] === word) {
                // 存入结果
                result.push(words[i]);
                // 拿到下一个要找的字母
                const len = words[i].length;
                const w = words[i][len - 1];

                // js 的splice方法 就是删除当前数组指定位置的元素，第一个参数就是找到的位置，第二个参数就是从那开始删几个
                words.splice(i, 1);

                // js 的这个方法会改变原数组
                // 所以这里words就没有刚刚被找到的单词了
                // 然后继续找
                findNext(w, words);
                break;
            }

            // 下面处理遍历完依然没找到的情况
            if (i === words.length - 1) {
                // js的findIndex方法就是从数组中找到指定元素的index，你用for循环找也可以
                const index = dict.findIndex(value => value === word);
                // 判断是不是z
                const newWord = word === 'z' ? 'a' : dict[index + 1];
                findNext(newWord, words);
                break;
            }
        }
    }
    if (words.length <= 1) {
        return words;
    }
    const first = words.splice(0, 1)[0];
    result.push(first);
    findNext(first[first.length - 1], words);
    return result;
}

console.log(long(['abs', 'bgg', 'solute', 'gaa']));