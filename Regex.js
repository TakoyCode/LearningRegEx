// RegEx

// findWordInString()
// matchEmails();

// findPhoneNumber();
// replaceText();

// matchDates();
// validateStrongPassword();

// findDoubleWords();
extractUsernamesFromEmails();

// 1. Basic RegEx tasks
function findWordInString() {
    const text = "password pass test";

    // const regEx = new RegExp("\\bpass\\b");
    const regEx = /\bpass\b/;

    // \bpass\b means to find the word "pass" that stands as a singular word and not part of ant other word

    console.log(text)
    console.log('Does string include "word"?' + " " + regEx.test(text))
}

function matchEmails() {
    const text = "password@123.com";

    // const regEx = new RegExp("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b");
    const regEx = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

    // \b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b 
    // [A-Za-z0-9._%+-]+ means that only the letters in the array is valid, 
    // and the + at the end means that you have to be atleast 1 letter from that array
    // @ just means it looks after an @ sign in that spot
    // \. just means it looks after an . sign in that spot, we have to use \. cause . is shorthand for a wildcard metacharacter.
    // [A-Z|a-z] mean only letters A-Z in uppercase and lowercase is valid, 
    // {2,} means that there has to be 2 or more letters from the array above

    console.log(text)
    console.log("Is the string an email address?" + " " + regEx.test(text))
}

// 2. "Intermediate Patterns - not done with these ones
function findPhoneNumber() {
    const num1 = "123-456-7890";
    const num2 = "(123) 456-7890";

    // const regEx = new RegExp("(\\(\\d{3}\\) \\d{3}-\\d{4}|\\d{3}-\\d{3}-\\d{4})");
    const regEx = /\(\d{3}\) \d{3}-\d{4}|\d{3}-\d{3}-\d{4}/;

    // \d{3} means there has to be 3 numbers, and \d{4} means there has to be 4 numbers.
    // | works like an OR operator, so it checks the first regex then the second.
    // \( = ( and \) = )

    console.log(num1)
    console.log('Does string include a valid format for a phone number?' + " " + regEx.test(num1))

    console.log(num2)
    console.log('Does string include a valid format for a phone number?' + " " + regEx.test(num2))
}

function replaceText() {
    const text = "RegEx is a beautiful tool. RegEx is life. RegEx is Love.";
    console.log("Old text: " + text)

    // const regEx = new RegExp("\\bRegEx\\b", "gi");
    const regEx = /\bRegEx\b/gi;

    // g at the end means that the regex should replace all matched, not just the first one
    // i at the end makes it so that the regex is not case sensitive

    const newText = text.replace(regEx, "Regular Expressions")
    console.log("New text: " + newText)
}

// 3. Advanced pattern recognition
function matchDates() {
    const date1 = "12-31-2024";
    const date2 = "2024/12/31";

    // const regEx = new RegExp("(\\d{2}-\\d{2}-\\d{4}|\\d{4}/\\d{2}/\\d{2})");
    const regEx = /(\d{2}-\d{2}-\d{4}|\d{4}\/\d{2}\/\d{2})/;

    console.log(date1)
    console.log(`Is this string in valid date format? ${regEx.test(date1)}`)

    console.log(date2)
    console.log(`Is this string in valid date format? ${regEx.test(date2)}`)
}

function validateStrongPassword() {
    const password1 = "hunter2";
    const password2 = "Hunter2!";

    // const regEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // ^ makes it so that the match starts at the start of the string
    // $ makes it so that the match ends at the end of the string
    // Together they make sure the entire string is validated by the regex

    // (?=...) is called a lookahead and check if the string contains whats after the =.
    // (?=.*[a-z]) looks for if the string contains a lowercase letter
    // (?=.*[A-Z]) looks for that the string contains an uppercase letter 
    // (?=.*\d) looks for if the string contains a digit
    // (?=.*[@$!%*?&]) looks for if the string contains a special character

    // .* means match 0 or more of any characters

    // [A-Za-z\d@$!%*?&] is everything the string can contain
    // {8,} means the string have to be 8 or more characters

    console.log(password1)
    console.log(`Is this password a strong password? ${regEx.test(password1)}`)
    console.log(password2)
    console.log(`Is this password a strong password? ${regEx.test(password2)}`)
}

// 4. Grouping and Backreferences 
function findDoubleWords() {
    const doubleWord = "the the";
    const notDouble = "the";

    // const regEx = new RegExp("\\b(\\w+)\\s+\\1\\b");
    const regEx = /\b(\w+)\s+\1\b/;

    // \w+ means one or more word characters
    // \s+ means one or more whitespace characters
    // \1 means that it looks back at the 1st capture group ((\w+) in this regex),
    //    and it uses the result of that capture group to make a new match with it.

    console.log(doubleWord)
    console.log(`Is there a double word in the string? ${regEx.test(doubleWord)}`)
    console.log(notDouble)
    console.log(`Is there a double word in the string? ${regEx.test(notDouble)}`)
}

function extractUsernamesFromEmails() {
    const email = "Test@Test.com";

    // const regEx = new RegExp("^(\\w+)@");
    const regEx = /^(\w+)@/;

    const username = email.match(regEx)[1];

    console.log(`email: ${email}`);
    console.log(`username: ${username}`);
}
