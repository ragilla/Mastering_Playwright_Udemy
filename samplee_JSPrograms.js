"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
// Program to remove duplicates from the array
console_1.default.log("Program to remove duplicates from an array");
var arr = [1, 2, 3, 4, 5, 5];
var unique = __spreadArray([], new Set(arr), true);
console_1.default.log(unique);
// Program to reverse a string
console_1.default.log("Program to reverse a string");
var str = "EPAMINTERVIEWPREPARATION";
var revstr = str.split('').reverse().join('');
console_1.default.log(revstr);
// Programs to find a the string is polindrome or not
console_1.default.log("Program to find polindrome or NOT");
var str1 = "ABBA";
var str2 = str1.split('').reverse().join('');
if (str1 === str2) {
    console_1.default.log("Polindrome");
}
// Program to find duplicate characters in the string
console_1.default.log("Program to find duplicate characters in the string");
var str3 = "test";
var map = {};
for (var _i = 0, str3_1 = str3; _i < str3_1.length; _i++) {
    var char = str3_1[_i];
    map[char] = (map[char] || 0) + 1;
}
// Print duplicates
for (var key in map) {
    if (map[key] > 1) {
        console_1.default.log(key);
    }
}
// Find the largest of three numbers
console_1.default.log("Program to find largest of 3 number");
var numArray = [1, 2, 3, 4, 5];
var max = Math.max.apply(Math, numArray);
console_1.default.log(max);

