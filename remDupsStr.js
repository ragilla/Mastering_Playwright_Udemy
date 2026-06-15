function unique(str) {
    return [...new Set(str)].join('');
}
console.log(unique("automation"))