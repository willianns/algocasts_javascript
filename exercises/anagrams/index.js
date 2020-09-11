// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const strA = stringA.replace(/[^\w]/g,'').toLowerCase();
//     const strB = stringB.replace(/[^\w]/g,'').toLowerCase();

//     let charMapA = {};
//     for (const i of strA) {
//         if (!charMapA.hasOwnProperty(i))
//             charMapA[i] = 0;
        
//         charMapA[i] += 1;
//     }

//     let charMapB = {};
//     for (const i of strB) {
//         if (!charMapB.hasOwnProperty(i))
//             charMapB[i] = 0;
        
//         charMapB[i] += 1;
//     }

//     if (Object.getOwnPropertyNames(charMapA).length !== Object.getOwnPropertyNames(charMapB).length)
//         return false;

//     let isAnagram = true;
//     for (const key in charMapA) {
//         if (charMapA.hasOwnProperty(key)) {
//             const element = charMapA[key];

//             if (!charMapB.hasOwnProperty(key)) {
//                 isAnagram = false;
//                 return;
//             } else {
//                 if (charMapB[key] !== element) {
//                     isAnagram = false
//                     return;
//                 }
//             }
//         }
//     }

//     return isAnagram;
// }

function buildCharMap(str) {
    let charMap = {};
    for (const i of str.replace(/[^\w]/g,'').toLowerCase()) {
        charMap[i] = charMap[i] + 1 || 1;
    }

    return charMap;
}

function anagrams(stringA, stringB) {
    let charMapA = buildCharMap(stringA);
    let charMapB = buildCharMap(stringB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
        return false;

    for (const key in charMapA) {
        if (charMapA[key] !== charMapB[key]) {
            return false;
        }
    }

    return true;
}

module.exports = anagrams;
