const notes = [{
    title: 'My next trip' ,
    body: 'I would like to go to Russia'
}, {
    title: 'Habbits to work on' ,
    body: 'Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]
// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }
//45. Sorting Arrays
const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if(a.title.toLowerCase() < b.title.toLowerCase())
        {
            return -1
        }
        else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        }
        else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)


/* const findNotes = function (notes1, query) {
    
    return notes1.filter (function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
} 

console.log(findNotes(notes, 'eating')) // passing Notes array

     const findNote = function (notes, noteTitle) {
         const index = notes.findIndex(function (note, index) {
             return note.title.toLowerCase() === noteTitle.toLowerCase()
         })
         return notes[index]
     }

 const note = findNote( notes, 'Office Modification')
console.log(note) */