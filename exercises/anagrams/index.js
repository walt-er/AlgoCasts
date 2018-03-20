// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// or
// make a helper function

function anagrams(stringA, stringB) {

    // remove extra chars and make lowercase
    stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB.replace(/[^\w]/g, '').toLowerCase();

    // // return false if different number of chars
    // if (stringA.length !== stringB.length) {
    //     return false;
    // }

    // // Count characters
    // const charsA = {};
    // const charsB = {};
    // for  (let i = 0; i < stringA.length; i++) {
    //     charsA[stringA[i]] = charsA[stringA[i]] + 1 || 1;
    //     charsB[stringB[i]] = charsB[stringB[i]] + 1 || 1;
    // }

    // // Look for any mismatches
    // for (key in charsA) {
    //     if (charsA[key] !== charsB[key]) {
    //         return false;
    //     }
    // }

    // // If no mismatches, return true
    // return true;

    // // or

    return stringA.split('').sort().join('') == stringB.split('').sort().join('');
}

anagrams("hello", "llohe");

module.exports = anagrams;
