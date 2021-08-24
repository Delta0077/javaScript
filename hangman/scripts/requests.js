// using async and await instead of promises i.e const getPuzzleOld
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle!')
    }
}



// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//          if (response.status === 200) {
//              return response.json()
//          } else {
//              throw new Error ('Unable to fetch puzzle')
//          }
//      }).then ((data) => {
//          return data.puzzle
//      })
//  }

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}


// Converting XMLHttpRequest with fetch API
// converting promises to async/await function
const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fecth country details!')
    }
}

// const getCountryOld = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch data!')
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === countryCode)
//     })
// }

// Converting to async/await function
const getLocation = async () => {

    const response = await fetch('//ipinfo.io/json?token=ee029dd58ca974')

    if (response.status === 200) {
        return response.json()

    } else {
        throw new Error('Unable to get the current location!')
    }
}

// const getLocation = () => {
//     return fetch('http://ipinfo.io/json?token=ee029dd58ca974').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch Location!')
//         }
//     })
// }