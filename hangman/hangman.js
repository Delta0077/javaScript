class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.gussedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
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
    // Setting up a new method to get back a status message
    getStatusMessage() {
        if (this.status === 'playing') {
            return `Guesses left ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`// using array.join() method to convert the array back to string
        } else {
            return 'Good job! You guessed the correct word (o_o).'
        }
    }
    getPuzzle() {
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
    makeGuess(guess) {
        guess = guess.toLowerCase()
    const isUnique = !this.gussedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    // disable new guesses unless 'playing'
    if (this.status != 'playing') {
        return
    }

    if (isUnique) {
        this.gussedLetters.push(guess)
    }

    if (isUnique && isBadGuess ) {
        this.remainingGuesses--
    }

    this.calculateStatus()
    }
}