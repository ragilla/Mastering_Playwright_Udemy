const checkString = "aabcdee";
const map: any = {};
for (let char of checkString) {
    map[char] = (map[char] || 0) + 1;
}
for (let key in map) {
    if (map[key] > 1) {// //(map[key] > 1) // repeated characters
        console.log(key, map[key])
        //break; //first non repeating character
    }
}



/*function nonrepeatingString(str) {
    const map = {};
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }
    for (let key in map) {
        if (map[key] === 1) {
            console.log(key, map[key])
        }
    }
}
const nonrepeatingChars = nonrepeatingString("LT & Mindtree");
console.log(nonrepeatingChars);*/