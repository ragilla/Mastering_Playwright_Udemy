function isAnagram(str1: string, str2: string): boolean {
    if (str1.length != str2.length) {
        return false;
    }
    const map = {};
    for (let ch of str1) {
        map[ch] = (map[ch] || 0) + 1;
    }
    for (let ch of str2) {
        if (!map[ch]) {
            return false;
        }
        map[ch]--;
    }
    return true;
}
console.log(isAnagram("listen", "silent")); // true
