const originStr = "aaaabbbccd";
const map = {};
for (const char of originStr) {
    map[char] = (map[char] || 0) + 1;
}
console.log(map)
for (const key in map) {
    if (map[key] > 1) {
        console.log(`${key} : ${map[key]}`)
    }
}