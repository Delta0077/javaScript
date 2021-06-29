// Primitive value: string, number, boolean, {null, undefined}= true primitives, we can never access a property or method on them
// null & undefined will never end up being objects

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype -->Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()

// Printing on the console which key was pressed
window.addEventListener ('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
})