const strOriginal = "aaaabbbccd";
const map: { [key: string]: number } = {};

for (const ch of strOriginal) {
    map[ch] = (map[ch] || 0) + 1;
}

for (const ch of strOriginal) {
    if (map[ch] === 1) {
        console.log("First non-repeating character:", ch);
        break;
    }
}