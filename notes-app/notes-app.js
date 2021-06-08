const notes = getSavedNotes()

const filters = {
    searchText : ''
}

renderNotes(notes, filters)

// 53 Event handling through javaScript
document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        id: uuidv4(),
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

// DOM - Document Object Model
// const p = document.querySelector('p')
// p.remove()

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {

//     p.textContent = ('******')
//     //console.log(p.textContent)
//     //p.remove()
// })

// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from javaScript'
// document.querySelector('body').appendChild(newParagraph)