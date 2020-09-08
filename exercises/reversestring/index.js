// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// function reverse(str) {
//     let size = str.length;
//     let reversed = new Array(size);
//     str
//         .split('')
//         .forEach((chr, i) => reversed[size-i] = chr);
        
//     return reversed.join('');
// }

// function reverse(str) {
//     let reversed = [];
//     let arr = str.split('');
//     arr.forEach(chr => reversed.unshift(chr));

//     return reversed.join('');
// }

function reverse(str) {
    let reversed = '';

    for(let chr of str) {
        reversed = chr + reversed;
        debugger;
    }

    return reversed;
}

// function reverse(str) {
//     return str
//         .split('')
//         .reduce((rev, el) => el + rev, '');
// }

module.exports = reverse;
