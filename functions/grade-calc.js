let grade = function (Score, totalScore)
{
    let percent = (Score / totalScore) * 100
    let letterGrade = ''
    
    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    }
    else{
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} grade(${percent}%)!`
}

let result = grade(60, 100)
console.log(result)