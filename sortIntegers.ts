const arry = [10, 11, 1, 2, 5, 8, 4, 6];
let temp = 0;
for (let i = 0; i < arry.length; i++) {
    for (let j = i + 1; j < arry.length; j++) {
        if (arry[i] > arry[j]) {
            temp = arry[i];
            arry[i] = arry[j];
            arry[j] = temp;
        }
    }
}
console.log("Sorted Array:");
for (let i = 0; i < arry.length; i++) {
    console.log(arry[i]);
}