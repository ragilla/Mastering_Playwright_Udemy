const arrList = [11, 1, 20, 3, 7, 12];
let maxVal = 0;

for (let i = 0; i < arrList.length; i++) {
    if (arrList[i] > maxVal) {
        maxVal = arrList[i];
    }
}
console.log(maxVal)