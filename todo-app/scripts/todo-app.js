'use strict'

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})




document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim() // Getting a trimmed version of the input
    e.preventDefault()

    if (text.length > 0) {
        
    todos.push({
        id: uuidv4(),
        text, // ES6 object definaition shorthand(when a property's value comes from a exact same named variable we can use the variable directly )
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
    } 
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})