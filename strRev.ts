/*const strforRev = "Munindhar";
const revStr = strforRev.split('').reverse().join('');
console.log(revStr);*/

/*function reverse(str) {
    return str
    .split('').reverse().join('');
}
console.log(reverse("Munindhar"));*/

const str = "Munindhar";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}
console.log(reversed);