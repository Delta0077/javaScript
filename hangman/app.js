// Primitive value: string, number, boolean, {null, undefined}= true primitives, we can never access a property or method on them
// null & undefined will never end up being objects

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype -->Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// HTTP
// Request - what do we want to do
// Response - What was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()

// Printing on the console which key was pressed
window.addEventListener ('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
})

getPuzzle((error, puzzle) =>{
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})


// Making an HTTP request


// // Challenge 106. Exploring Another API

// const countryCode = 'IN'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log('Unable to fetch data')
//     }
// })

// countryRequest.open('GET' , 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()
// if(countryCode) {
//     console.log()
// }

// Status codes https://httpstatuses.com/