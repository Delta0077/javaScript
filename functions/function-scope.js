// Global Scope (convertFahrenheitToCelcius, tempOne, tempTwo)
  // Local Scope (fahrenheit, celcius)

let convertFahrenheitToCelcius = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * 5/9

    if (celcius <= 0) {
        let isFreezing = true
    }
    return celcius
}

let tempOne = convertFahrenheitToCelcius(68)
let tempTwo = convertFahrenheitToCelcius(32)

console.log(tempOne)
console.log(tempTwo)