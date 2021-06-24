// product --> Object.prototype --> null
const product = new Object({
    name: 'Yeah Bwoi'
})


Object.prototype.hasOwnProperty = () => 'This is the new function'
// hasOwnProperty
console.log(product.hasOwnProperty('name'))
console.log(product)