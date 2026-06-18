const orgStr = "aabcdee";
const map: any = {};


for (let char of orgStr) {
    map[char] = (map[char] || 0) + 1;
}
let result = '';
for (let char of orgStr) {

    if (map[char] === 1) {
        result = result + char;
    }
}
console.log(result);