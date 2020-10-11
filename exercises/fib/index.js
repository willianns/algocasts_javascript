// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // O(n) linear runtime
// function fib(n) {
//     let seq = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         seq.push(seq[i-1] + seq[i-2]);
//     }

//     return seq[n];
// }

// // O(n) linear runtime (com acumuladores, já que não chamo duas vezes a função, dobrando o processamento)
// function fib(n, index = 0, acc_l = 0, acc_r = 1) {
//     if (n <= index) {
//         return acc_l;        
//     } else if (n <= 1) {
//         return n;
//     }

//     return fib(n, index + 1, acc_r, acc_l + acc_r);
// }

// // O(2^n) Exponential time - nonono então vamos usar memoization já que usamos ali a chamada duas vezes dobrando o consumo
function slowFib(n) {
    if (n < 2) {
        return n;        
    } 

    return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
    const cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

const fib = memoize(slowFib);

module.exports = fib;
