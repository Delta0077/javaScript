const todo = [{
    text:'Order cat food',
    completed: false
},{
    text:'Clean kitchen',
    completed: false
},{
    text:'Buy food',
    completed: false
},{
    text:'Do work',
    completed:true
},{
    text:'Exercise',
    completed: true
}]

// Challenge 44 Filtering arrays
/* const findIncompleteTask = function (todo1) {

return todo1.filter (function (note) {
    return !note.completed
})
}
console.log(findIncompleteTask(todo)) */

// Challenge 45 Sorting Arrays

const sortTodo = function (todo) {
    todo.sort (function (a , b) {
        if(!a.completed && b.complete) {
            return -1
        }
        else if (!b.completed && a.completed ) {
            return 1
        }
        else {
            return 0
        }
    })
}
sortTodo(todo)
console.log(todo)


/* const deletTodo = function (todos, todoText) {
     const index = todos.findIndex(function (todo) {
         return todo.text.toLowerCase() === todoText.toLowerCase()
     })
     if (index > -1) {
         todos.splice(index, 1)
     }
 }

 deletTodo(todo, 'Do work')
 console.log(todo)

 console.log(`You have ${todo.length} todos`)
console.log(`Todo: ${todo[0]}`)
console.log(`Todo: ${todo[todo.length - 2]}`)

 todo.splice(2, 1)
todo.push('Hi there how are you')
todo.shift()
console.log(todo)
todo.forEach (function (item, index) {
    const numIndex = index + 1
    console.log(`${numIndex}. ${item}`)
}) 

 for (count = 0 ; count <todo.length ; count++) {
    let numIndex = count +1
    console.log(`${numIndex}. ${todo[count]}`)
} 

 for (let count = 0; count < todo.length; count++) {
    let numIndex = count + 1
    console.log(`${numIndex}. ${todo[count]}`)
} 
 todo.forEach (function (i, j) {
    const numIndex = j + 1
    console.log(`${numIndex}. ${i}`)
}) */