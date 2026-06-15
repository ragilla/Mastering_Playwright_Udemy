const nums = [10, 5, 20];
let largest = 0;
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
        largest = nums[i];
    }
}
console.log("Largest:", largest);
let secondLargest=0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > secondLargest && nums[i] < largest) {
        secondLargest = nums[i];
    }
}
console.log("Second Largest:", secondLargest);