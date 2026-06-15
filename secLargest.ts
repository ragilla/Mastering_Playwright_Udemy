const values = [10, 5, 20];
let maxValue = 0;
let secMaxValue = 0;

for (const val of values) {
    if (val > maxValue) {
        secMaxValue = maxValue;
        maxValue = val;
    }
    else if (val > secMaxValue && val != maxValue) {
        secMaxValue = val;
    }
}
console.log(secMaxValue);
/*
num > largest
Step-1:
10 > 0
    secondLargest = 0
    largest = 10

Step-2:
num > largest
5 > 10 - false

(5 > 0 && 5 != 10)
    secondLargest = num = 5

Step-3:
num > largest
20 > 10
    secondLargest = 10;----
    largest = 20;

    20 > 10 && 20 != 10

*/