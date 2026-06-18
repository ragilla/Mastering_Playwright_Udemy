const arrOne = [1, 2, 3, 4, 6, 7, 10];

const max = Math.max(...arrOne);
for (let i = 1; i <= max; i++) {
    if (!arrOne.includes(i)) {
        console.log(i);
    }
}