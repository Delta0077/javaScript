/* let myBook = {
    title: '1984',
    author: 'Yeah Bwoi',
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Mr Deep'
console.log(`${myBook.title} by ${myBook.author}`) */

let props = {
    name: 'Mr Deep',
    age: 24,
    location: 'India'
}

console.log(`${props.name} is ${props.age} and lives in ${props.location}`)

props.age = props.age + 1
console.log(`${props.name} is ${props.age} and lives in ${props.location}`)