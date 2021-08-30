// Named Export
// Default export

const add = (a, b) => a + b // exporting add function so we can use it into another file
const name = 'Aditya Das'

const square = (x) => x * x
// export default square // default export syntax
console.log('from my code')

export { add, name, square as default } // Syntax to export in a single line