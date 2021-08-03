const createConunter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}
const counter = createConunter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-80))

// Tipper
const createTipper = (tip) => {
    return (billAmount) => {
        return billAmount * tip/100
    }
}

const tip20 = createTipper(20)
const tip30 = createTipper(30)
console.log(tip20(120))
console.log(tip30(150))