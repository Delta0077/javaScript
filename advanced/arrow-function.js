const square = (num) => {
    return num * num
}

console.log(square(10))

const people = [{
    name:'Aditya',
    age: 22
},{
    name:'Mr Deep',
    age:26
},{
    name:'Yeah bwoi',
    age:31
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })
// const under30 = people.filter((person) => person.age <30)

const age22 = people.find((person) => person.age === 22)

console.log(age22)