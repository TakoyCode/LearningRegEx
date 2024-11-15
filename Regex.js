// RegEx
findWordInString()
matchEmails();

// 1. Basic RegEx tasks
function findWordInString() {
    const text = "password pass test";
    // \\bpass\\b means to find the word "pass" that stands as a singular word and not part of ant other word
    const regEx = new RegExp("\\bpass\\b");

    console.log(text)
    console.log('Does string include "word"?' + " " + regEx.test(text))
}

function matchEmails() {
    const text = "password@123.com";
    // \\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\\b 
    // [A-Za-z0-9._%+-]+ means that only the letters in the array is valid, 
    // and the + at the end means that you have to be atleast 1 letter from that array
    // @ just means it looks after an @ sign in that spot
    // \. just means it looks after an . sign in that spot, we have to use \. cause . is shorthand for a wildcard metacharacter.
    // [A-Z|a-z] mean only letters A-Z in uppercase and lowercase is valid, 
    // {2,} means that there has to be 2 or more letters from the array above
    const regEx = new RegExp("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b");

    console.log(text)
    console.log("Is the string an email address?" + " " + regEx.test(text))
}



// 2. "Intermediate Patterns - not done with these ones
function findPhoneNumber() {
    const text = "password pass test";
    // xxx
    const regEx = new RegExp("\\bpass\\b");

    console.log(text)
    console.log('Does string include "word"?' + " " + regEx.test(text))
}

function replaceText() {
    const text = "password pass test";
    // xxx
    const regEx = new RegExp("\\bpass\\b");

    console.log(text)
    console.log('Does string include "word"?' + " " + regEx.test(text))
}