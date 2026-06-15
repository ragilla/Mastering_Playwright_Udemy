let password = "  MySecurePass123  password";

let trimPassword = password.trim();
let pwLength = trimPassword.lengt >= 8;
let checkingString = trimPassword.toLowerCase().includes("password");

if (trimPassword & pwLength & checkingString) {
    console.log("Strong Password");
} else {
    console.log("Week Password");
}