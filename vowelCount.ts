const strgg = 'abcdefghi';
let count = 0;
for (let i = 0; i < strgg.length; i++) {
    let ch = strgg[i];
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        count++;
    }
}
console.log(count);