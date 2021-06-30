const fact = (number) => {
    let answer = 1;
    if(number == 0 || number == 1){
        return answer
    } else {
    for(let i = number; i>=1; i--) {
        answer = answer * i;
    }
    return answer
}
}
console.log(fact(5))