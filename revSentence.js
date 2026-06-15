function reverseSentence(sentence) {
    return sentence
        .split(" ")
        .reverse()
        .join(" ");

}
console.log(reverseSentence("I Love JavaScript"));
