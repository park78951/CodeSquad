function halfAdder(num1, num2) {
    let sum = 0;
    let carry = 0;

    function add(a, b) {
        return a === b ? 0 : 1;
    }
    
    function carr(a, b) {
        return a && b ? 1 : 0;
    }

    sum = add(num1, num2)
    carry = carr(num1, num2)
    
    return [carry, sum];
}