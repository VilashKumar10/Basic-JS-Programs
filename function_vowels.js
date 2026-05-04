const countVowels = function (str) {
    let count = 0;
    for (let c of str) {
        if ("aeiouAEIOU".includes(c)) count++;
    }
    return count;
};

console.log(countVowels("charan"));