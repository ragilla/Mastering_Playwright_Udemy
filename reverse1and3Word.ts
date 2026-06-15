const str = "Munindhar Automation Engineer";
const reverseStr = str
    .split(" ")
    .map((word, index) => {
        if (index === 0 || index === 2) {
            return word.split("").reverse().join("");
        }
        return word;
    })
    .join(" ");
console.log(reverseStr);