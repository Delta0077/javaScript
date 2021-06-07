// Function - input (argement), code, output

/* let greetUser = function () {
    console.log('Welcome User!')
}
greetUser()

let square = function (num){
    let result = num * num;
    return result

}

let value = square(3)
console.log(value) */

// Challenge Area

let convertFahrenheitToCelcius = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * 5/9
    return celcius
}

let tempOne = convertFahrenheitToCelcius(68)
let tempTwo = convertFahrenheitToCelcius(32)

console.log(tempOne)
console.log(tempTwo)