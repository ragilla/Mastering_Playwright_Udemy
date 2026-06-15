function duplicates(str) {
    const map = {};
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }
    return map;
}
const originStr = duplicates("epamtest");
console.log(originStr);