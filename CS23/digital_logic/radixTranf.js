function dec2bin(decimal) {
    let answer = [],
        q = decimal
    while (q > 1) {
        answer.push(q % 2)
        q = Math.floor(q / 2)
    }
    answer.push(q)
    return answer;
}

function bin2dec(bin) {
    var answer = 0;
    bin.forEach((el, i) => {
        if(el) answer += Math.pow(2, i)

    })
    return answer;
}