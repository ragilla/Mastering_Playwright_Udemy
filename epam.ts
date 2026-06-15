const arr = [
    { type: "Browser", browser: "firefox" },
    { type: "Browser", browser: "chrouim" },
    { type: "OS", browser: "apple" },
    { type: "OS", browser: "androind" }
];

const result = arr.reduce((acc, { type, browser }) => {
    (acc[type] ??= []).push(browser);
    return acc;
}, {});
console.log(result);