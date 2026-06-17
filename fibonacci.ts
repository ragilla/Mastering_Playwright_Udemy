let c;
var a = 0;
var b = 1;
console.log(a);
console.log(b);
for (let i = 1; i < 20; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}