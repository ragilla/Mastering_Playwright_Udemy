const strforRev = "I Love JavaScript";
const strAfterRev = strforRev
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
console.log(strAfterRev);