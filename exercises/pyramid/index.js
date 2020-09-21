// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     let columns = n + (n-1);
    
//     for (let index = 0; index < n; index++) {
//         let row = '';
//         let l_space = Math.floor(columns / 2) - index;
//         let r_space = Math.floor(columns / 2) + index;

//         for (let j = 0; j < columns; j++) {
//             if (j < l_space || j > r_space) {
//                 row += ' ';
//             } else {
//                 row += '#';
//             }
//         }
//         console.log(row);
//     }
// }


// function pyramid(n) {
//     const columns = (n * 2) -1;
//     const midpoint = Math.floor(columns / 2);

//     for (let row = 0; row < n; row++) {
//         let level = '';

//         for (let column = 0; column < columns; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }   
        
//         console.log(level);
//     }
// }

function pyramid(n , row = 0, level = '') {
    if (n === row) {
        return;
    }

    const columns = (n * 2) -1;
    const midpoint = Math.floor(columns / 2);

    if (level.length === columns) {
        console.log(level);
        return pyramid(n, row + 1, '');
    }

    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    pyramid(n, row, level + add);
}

module.exports = pyramid;