const mainStr = 'Munindhar Automation Engineer';
const revStr = mainStr
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");

console.log(revStr);