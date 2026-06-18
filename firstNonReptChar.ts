const orgStr = "aabbccdef";
const map = {};

for(let ch of orgStr){
    map[ch] = (map[ch] || 0) + 1;
}
for (let ch of orgStr) {
    if (map[ch] === 1) {
        console.log(ch);
        break;
    }
}