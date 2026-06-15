import { test } from '@playwright/test';

function reverseSentence(sentence: string): string {
    return sentence
        .split(" ")
        .reverse()
        .join(" ");
}

test('Reverse sentence test', async () => {
    console.log(reverseSentence("I Love JavaScript"));
});