const names = ["Tom", "John", "Sam", "David", "Alex", "Ki"];

let count = 0;

for (const name of names) {
    if (name.length > 3) {
        console.log(name);
        count++;
    }
}
console.log(count);