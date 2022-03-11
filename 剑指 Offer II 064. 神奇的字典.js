var MagicDictionary = function () {
    this.dict = [];
};

MagicDictionary.prototype.buildDict = function (dictionary) {
    this.dict = dictionary;
};

MagicDictionary.prototype.search = function (searchWord) {
    for (let i = 0; i < this.dict.length; i++) {
        if (searchWord.length !== this.dict[i].length) continue;

        let diff = 0;
        for (let j = 0; j < searchWord.length; j++) {
            if (diff > 1) break;
            if (searchWord[j] !== this.dict[i][j]) diff++;
        }

        if (diff === 1) return true;
    }

    return false;
};
