const arr = [10,20,3,30];
let maxVal = arr[0];
let minVal = arr[0];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > maxVal) {
		maxVal = arr[i];
	}
}
console.log(maxVal);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] < maxVal) {
		minVal = arr[i];
	}
}
console.log(minVal);