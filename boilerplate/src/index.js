import otherSquare, /*default export*/  { add, name } from './utilities' // This is called Named export. syntax for accessing any function from another js file, we can access multiple function just by seperating with a comma.
import secondScream from './scream' // named
console.log('index.js')
console.log(add(32, 6))
console.log(secondScream(name))
console.log(otherSquare(10))