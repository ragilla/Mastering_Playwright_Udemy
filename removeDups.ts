const oldStr = "aaabbbcccdde";
const newStr = [...new Set(oldStr)];
console.log(newStr);