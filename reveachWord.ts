const strforRev = "The Chubb Corporation";
const strAfterRev = strforRev.split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");

console.log(strAfterRev);
