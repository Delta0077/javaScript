let notes = getSavedNotes()

const filters = {
    searchText : '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

// 53 Event handling through javaScript
document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})










// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY, h:mm:ss a'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()

// console.log(moment(nowTimestamp).toString())

// const birthday = moment()
// birthday.year(1996).month(8).dates(05)
// console.log(birthday.format('MMM D, YYYY'))



// Unix Epoch - January 1st 1970 00:00:00
// const now = new Date()
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// const dateOne = new Date('March 1 2018 05:40:20')
// const dateTwo = new Date()

// const dateOneTimestamp = dateOne.getTime()
// const dateTwoTimestamp = dateTwo.getTime()

// if (dateOneTimestamp < dateTwoTimestamp) {
//     console.log(dateOne.toString())
// } else if (dateTwoTimestamp < dateOneTimestamp) {
//     console.log(dateTwo.toString())
// }

// console.log(`Year:${now.getFullYear()}`)
// console.log(`Month:${now.getMonth()}`)
// console.log(`Day of the month:${now.getDate()}`)
// console.log(`Hour:${now.getHours()}`)
// console.log(`Minute:${now.getMinutes()}`)
// console.log(`Seconds:${now.getSeconds()}`)

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