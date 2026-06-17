let num = 1214;
var i, j = 0;
var a;
a = num;

while (a > 0) {
    i = a % 10;
    j = (j * 10) + i;
    a = Math.floor( a / 10);
}
console.log(j);
if (num===j) {
    console.log("Polindrome");
} else {
    console.log("NOT Polindrome");
}