// using async and await instead of promises i.e const getPuzzleOld
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
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

// Converting XMLHttpRequest with fetch API
const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data!')
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=ee029dd58ca974').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch Location!')
        }
    })
}