// const myAge = 17
// let message = myAge >= 18 ? 'You can vote!' : 'You cant vote!!!'
// console.log(message)


const myAge = 20
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Parker', 'Joey', 'Karin']
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')
// const lessTeam = () => {
//     return 'Team size: 3'
// }
// const invalidTeam = () => {
//     return 'Too many people on your team'
// }

// const final = team.length <= 4 ? lessTeam() : invalidTeam()
// console.log(final)