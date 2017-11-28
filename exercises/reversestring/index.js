// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    let reverse = '';
    for (let char of str) {
        reverse = char + reverse;
    }

    return reverse;

    // or

    // let reverse = '';
    // for (let i = str.length; i > 0; i--) {
    //     reverse += str.substring(i, i+1);
    // }
    // return reverse;

    // // or

    // return str.split('').reduce((rev, char) => char + rev, '');

    // // or

    // return str.split('').reverse().join('');
}

reverse('asdf');

module.exports = reverse;
