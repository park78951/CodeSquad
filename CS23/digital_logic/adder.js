//학습 출처: https://pa-pico.tistory.com/54 (PAPICO's Blog)

const binaryNum = (b) => b ? 1 : 0

function and(a, b) {
    return binaryNum(a && b);
}

function nand(a, b) {
    return binaryNum(!and(a, b));
}

function or(a, b) {
    return binaryNum(a || b);
}

function nor(a, b) {
    return binaryNum(!or(a, b));
}

function xor(a, b) {
    return or(and(!a, b), and(a, !b))
}

function halfAdder(num1, num2) {
    return [and(a, b), xor(a,b)]
}

function fullAdder(a, b, carry) {
    let s = xor(a, xor(b, carry)) // xor(xor(a, b), carry)도 가능
    let c = or(
            and(a, carry), 
            or(
                and(b, carry),
                and(a, b)
            )
        )
    return [c, s]
}

function *twoEach(iterA, iterB) {
    let leng = iterA.length
    for(let i = 0; i < leng; i++) {
        yield [iterA[i], iterB[i]]
    }
}

function byteadder(byteA, byteB) {
    let answer = [],
        leng = byteA.leng,
        carry = 0
    for(const val of twoEach(byteA, byteB)) {
        let [a, b] = val
        let [c, s] = fullAdder(a, b, carry)
        answer.push(s)
        carry = c
    }
    answer.push(carry)
    return answer;
}