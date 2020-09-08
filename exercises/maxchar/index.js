// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     let ranking = {};
//     let arr_ranking = [];
//     for (const c of str) {
//         if (!ranking.hasOwnProperty(c)) {
//             ranking[c] = 1;
//         } else {
//             ranking[c]++;
//         }
//     }

//     for (const key in ranking) {
//         if (ranking.hasOwnProperty(key)) {
//             arr_ranking.push([key, ranking[key]]);
//         }
//     }

//     return arr_ranking.sort((r1,r2) => r1[0] - r2[0])[0][0];
// }

// function maxChar(str) {
//     let chars = {};

//     for (let c of str) {
//         chars[c] = chars[c] + 1 || 1;
//     }

//     return Object.entries(chars).sort((r1,r2) => r1[0] - r2[0])[0][0];
// }

function maxChar(str) {
    let charMap = {};
    let max = 0;
    let maxChar = '';

    for (let c of str) {
        charMap[c] = charMap[c] + 1 || 1;
    }

    for (let char in charMap) {
        if (charMap.hasOwnProperty(char))
        {
            if (charMap[char] > max) {
                max = charMap[char];
                maxChar = char;
            }
        }
    }

    return maxChar;
}

module.exports = maxChar;
