function duplicates(str) {
    const map = {};
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }
    for (let key in map) {
        if (map[key] > 1) {
            console.log(key, map[key])
        }
    }
}
const originStr = duplicates("epamtest");
console.log(originStr);