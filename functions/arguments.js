/* // Multiple arguments
let add = function (a, b)
{
    return a+b
}

let sum = add(40, 5)
console.log(sum)

// Default arguments

let score = function (name = 'yeah bwoi', points = 0)
{
    return `Name:${name} - Score:${points}`
    //return 'Name: ' + name + ' Score ' + points
}
let scoreText = score(undefined, 99)
console.log(scoreText) */

// Challenge area

let Restaurent = function (total, tipPercent = .15) {
    return `A ${tipPercent * 100}% tip on ${total}$ would be ${total * tipPercent}$`
}

let temp = Restaurent(250, .15)
console.log(temp)