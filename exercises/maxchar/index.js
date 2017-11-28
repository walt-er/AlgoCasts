// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let highest = 0;
    let highestChar = '';

    for (let char of str) {
        // chars[char] == (!chars[char]) ? 1 : chars[char] + 1;
        chars[char] = chars[char] + 1 || 1;
    }

    // Loop over resulting object
    for (let char in chars) {
        if (chars[char] > highest) {
            highest = char[char];
            highestChar = char;
        }
    }

    return highestChar;
}

maxChar("Hello There!");

module.exports = maxChar;
