/* let min = 10
let max = 20
let randNum = Math.floor(Math.random() * max - min + 1) + min
console.log(randNum) */

// Challenge Area

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randNum = Math.floor(Math.random() * max - min + 1) + min
    return randNum === guess
}

console.log(makeGuess(5))