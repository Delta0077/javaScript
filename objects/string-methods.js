/* let name = 'yeah bwoi'
console.log(name.length)
console.log(name.toUpperCase()) */

// Challenge Area

let isValidPassword = function (password) {
    return (password.length > 8 && !password.includes('password'))
}

console.log(isValidPassword('asdf'))
console.log(isValidPassword('abcd123!@#%^&'))
console.log(isValidPassword('asdf123password'))