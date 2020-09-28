// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = [];

    for (let r = 0; r < n; r++) {
        result.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startRow <= endRow && startColumn <= endColumn) {
        //top row
        for (let i = startColumn; i <= endColumn; i++) {
            result[startRow][i] = counter;
            counter++; 
        }

        startRow++;

        //right column
        for (let j = startRow; j <= endRow; j++) {
            result[j][endColumn] = counter;
            counter++;
        }

        endColumn--;

        //bottom row
        for (let k = endColumn; k >= startColumn; k--) {
            result[endRow][k] = counter;
            counter++;
        }

        endRow--;

        //right column
        for (let l = endRow; l >= startRow; l--) {
            result[l][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }

    return result;
}

module.exports = matrix;
