const products = [{name: 'Yeah bwoi'}]
const product = products [0]

// Truthy - Values that resolves to true in boolean context
// Falsy - Values that resolves to false in boolean context
// Falsy values - false, 0, empty string, null, undefined & NaN


if (product) {
    console.log('product found')
} else {
    console.log('Product not found')
}