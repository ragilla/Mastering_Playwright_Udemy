/*1. Return a list containing only even numbers from a list of integers.
const numb = [10, 2, 11, 15];
for (let i = 0; i < numb.length; i++) {
    if (numb[i] % 2 === 0) {
        console.log(numb[i]);

    }
}*/
/*prime numbers to print between 2 to 100
for (let val = 2; val < 50; val++) {
    let flag = 1;
    for (let i = 2; i < val; i++) {
        if (val % 2 === 0) {
            flag = 0;
            break
        }
    }
    if (flag === 1)
        console.log(val);
}*/
/*max value from the list of integer array
let array = [10, 2, 3, 6, 5, 8, 74];
let bigNum = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > bigNum) {
        bigNum = array[i];
    }
}
console.log(bigNum);*/
// convert a string to upper case
/*const strVals = ["abc", "def", "ghi", "jkl"];
const afterstrVals = strVals.map(vals => vals.toLocaleUpperCase());
console.log(afterstrVals);*/
/* print stings starging with a
const orgNames = ["ani", "muni", "cuni", "", "ami"];
const filNames = orgNames.filter(n => n.startsWith("a"));
console.log(filNames); */

/*remove duplicate elements from an array
let vals = [1, 2, 3, 4, 5, 6, 6];
let unival:number[] = [];

for (let i = 0; i < vals.length; i++) {
    let flag = 1;
    for (let j = 0; j < unival.length; j++) {
        if (vals[i] === unival[j]) {
            flag = 0;
            break;
        }
    }
    if (flag === 1) {
        unival.push(vals[i]);
    }  
}
console.log(unival);*/
/* remove duplicate chars from the array
let chars = ['a', 'b', 'a', 'a', 'c', 'd','a','a','a','a','b','c'];
let uniqvals = [];

for (let i = 0; i < chars.length; i++) {
    let flag = 1;
    for (let j = 0; j < uniqvals.length; j++) {
        if (chars[i] === uniqvals[j]) {
            flag = 0;
            break;
        }
    }
    if (flag === 1) {
        uniqvals.push(chars[i]);
    }
}
console.log(uniqvals);*/
/*Sort the list of integers in an array
const aray = [5, 8, 5, 4, 2, 6, 9, 7, 1, 3, 0];
let tempVal = 0;
for (let i = 0; i < aray.length; i++) {
    for (let j = i + 1; j < aray.length; j++) {
        if (aray[i] > aray[j])
        {
            tempVal = aray[i];
            aray[i] = aray[j];
            aray[j] = tempVal;
        }
    }
}
for (let i = 0; i < aray.length; i++)
        console.log(aray[i]);*/
/*Count the number of strings with length greater than 3
const listStr = ["munindhar", "interview", "Company", "test", "abc"];
let cnt = 0;
for (let name of listStr) {
    if (name.length < 4) {
        console.log(name);
        cnt++;
    }
}
console.log(cnt);*/
/*Second Largest value
const numbers = [10, 5, 20,15,19];
let bigNum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > bigNum) {
        bigNum = numbers[i];
    }
}
console.log("largest Number: "+bigNum);
let secbigNum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > secbigNum && numbers[i] < bigNum) {
        secbigNum = numbers[i];
    }
}
console.log("Second Largest Number: "+secbigNum);*/
/*
let aarr = [10, 20, 30, 40,11];
let res = aarr.filter(n => n % 2 === 0);
console.log(res);

let x = [1, 2, 3];
let y = [...x, 4];
console.log(y);*/

/*let basket = ["apple", "banana", "mango", "cherry", "guava"]; 
console.log(basket);
basket.unshift("pomogranate");
console.log(basket);*/
/* We have an array of votes. We want to use reduce() method to return an object that has a count of y and n. Use an object as the accumulator.
const vots = ['y', 'y', 'y', 'y', 'n', 'n'];
const res = vots.reduce((acc, vots) => {
    acc[vots] = (acc[vots] || 0) + 1;
    return acc;
}, {});
console.log(res); */
/*const people = [
    { name: 'Alice', age: 15, city: 'NY' },
    { name: 'Bob', age: 17, city: 'LA' },
    { name: 'Charlie', age: 18, city: 'NY' },
    { name: 'David', age: 21, city: 'LA' },
    { name: 'David', age: 22, city: 'Chicago' }
];
const grouped = people.reduce((acc, person) => {
    const key = person.age >= 18 ? 'Major':'Minor';
    // initialize array if not present
    if (!acc[key]) {
        acc[key] = [];
    }
    // push current object into the group
    acc[key].push(person);
    return acc;
}, {});
console.log(grouped);*/
/* factorial of the given number
var num = 5;
var fact=1;
for(let i=1 ; i <= num;i++){
    fact = fact*i;
 }
 console.log(fact);*/
/* reverse a number
var n = 121;
var i, j = 0;
var number = n;
while (number > 0) {
    i = number % 10;
    j = (j * 10) + i;
    number = Math.floor(number / 10);
}
console.log(j);
if (n === j) {
    console.log("Polindrome");
}
else {
    console.log("NOT Polindrome");
}*/
/*count no.of digits in the given number
var num = 123455;
var i = 0;
while (num > 0) {
    num = Math.floor(num / 10);
    i = i + 1;
}
console.log(i);*/
/* sum of the digits
var number = 12345;
var i, j = 0;
var n;
n = number;
while (n > 0) {
    i = n % 10;
    j = j + i;
    n = Math.floor(n / 10);
}
console.log(j);*/
// swap without using 3rd variable
var aa = 50;
var bb = 30;

var aa = aa + bb; // 80
bb = aa - bb; //50 30 = 20
aa = aa - bb; //50 30  = 20
console.log(aa);
console.log(bb);















    



