// Prototypal Inheritance

class Person{
    constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}`
    })

    return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

const me = new Person('Aditya', 'Das', 25, ['Teaching', 'Biking'])
me.setName('Mrs Turner')
console.log(me.getBio())

const person2 = new Person ('Pritam', 'Howly', 26)
console.log(person2.getBio())