//Conditional statements - if if ..else if ...else if
//Loops - for while do while break continue
//Arrays // for ..in, for ..of...foreach //push pop shift unshift slice map filter

// in --- index
//of----values
// for each-----each element

let array = [10, 20, 30, 40, 50,15];
//push
console.log(array);
array.push(60); // adds at the end of array
console.log(array);

array.pop(); // ends an element from the end
console.log(array);

array.shift(); // removes an element from the start
console.log(array);

array.unshift(10); // adds an element from the start
console.log(array);

const newArray = array.map(num => num * 2); // => functions short cut - return new array
console.log(newArray);

const newArray1 = array.filter(num => (num % 2)===0); // => functions short cut - return new array
console.log(newArray1);

const sum = array.reduce((acc, num) => acc + num, 0); // retunds a single value
console.log(sum);

const sliceArr = array.slice(1, 3);
console.log(sliceArr);