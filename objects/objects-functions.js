/* let myBook = {
    title: '1984',
    author: 'Yeah Bwoi',
    pageCount: 326
}

let otherBook = {
    title: 'Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.pageCountSummary) */

// Challenge area

/* let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit - 32) * (5 / 9) + 273.15
    }
}
let temp = convertFahrenheit(74)
console.log(temp) */

let convertTemp = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit - 32) * (5 / 9) + 273.15
    }
}

let temp = convertTemp(32)
console.log(temp)