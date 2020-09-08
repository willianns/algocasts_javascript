// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const rev = str.split('').reverse().join('');

//     return str === rev;
// }

// function palindrome(str) {
//     let rev = '';

//     for (chr of str) {
//         rev = chr + rev;
//     }

//     return str === rev;
// }

// function palindrome(str) {
//     const rev = str.split('')
//         .reduce((rev, chr) => chr + rev, '');

//     return str === rev;
// }

function palindrome(str) {
    return str.split('').every((c, i) => {
        return c === str[str.length - i - 1];
    });
}

module.exports = palindrome;
