//callback function is a function passed as an argument to another function
 //t is executed after a certain task is completed
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function done() {
    console.log("Ragilla");
}
greet("Munindhar", done)