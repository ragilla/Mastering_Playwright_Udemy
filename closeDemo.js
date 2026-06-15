function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }

}
const counter = outer();
counter();
counter();
// A closure is when a function remembers variables from its outer scope even after the outer function has finished executing.