import { add, name } from './utilities' // syntax for accessing any function from another js file, we can access multiple function just by seperating with a comma
import { scream } from './scream'
console.log('index.js')
console.log(add(32, 1))
console.log(scream(name))