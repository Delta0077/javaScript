let grade = function (Score, totalScore)
{
    if (typeof Score ==='number' &&  typeof totalScore === 'number') {
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
    } else {
        throw Error('Please provide numbers only!!!')
    }
}
try {
    let result = grade(9, 20)
    console.log(result)
}
catch (e) {
    console.log(e.message)
}