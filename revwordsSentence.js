function reverseSentence(sentence) {
    return sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");

}
console.log(reverseSentence("I Love JavaScript"));