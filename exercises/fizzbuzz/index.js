// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//// too fancy, readbility too
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         let fizz = i % 3 === 0;
//         let buzz = i % 5 === 0;
//         let fizzbuzz = fizz && buzz;

//         if (fizzbuzz)
//             console.log('fizzbuzz');
//         else if (fizz)
//             console.log('fizz');
//         else if (buzz)
//             console.log('buzz');
//         else
//             console.log(i)
//     }
// }

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let fizz = i % 3 === 0;
        let buzz = i % 5 === 0;
        let fizzbuzz = fizz && buzz;

        if (i % 3 === 0 && i % 5 === 0)
            console.log('fizzbuzz');
        else if (i % 3 === 0)
            console.log('fizz');
        else if (i % 5 === 0)
            console.log('buzz');
        else
            console.log(i)
    }
}

module.exports = fizzBuzz;
