// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     let str = n.toString();
//     let rev = str.split('').reverse().join('');

//     let num = parseFloat(rev);
//     if (Math.sign(n) == -1)
//         num = num *-1;

//     return num;
// }

function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
