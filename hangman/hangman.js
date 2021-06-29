

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.gussedLetters = []
    this.status = 'playing'
}

// Creating a function which will show current status of the game i.e playing, failed or finished 
Hangman.prototype.calculateStatus = function () {
    
    // using array.every() method
    const finished = this.word.every((letter) => this.gussedLetters.includes(letter))

    // using if-else
    //let finished = true
    // this.word.forEach((letter) => {
    //     if (this.gussedLetters.includes(letter)) {
        
    //     } else {
    //         finished = false
    //     }
    // })

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach ((letter) => {
        if (this.gussedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.gussedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.gussedLetters.push(guess)
    }

    if (isUnique && isBadGuess ) {
        this.remainingGuesses--
    }

    this.calculateStatus()
}