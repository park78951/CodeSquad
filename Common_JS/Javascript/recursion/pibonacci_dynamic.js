let table = [0, 1];

function fibonacci(n) {
    if(n === 0) return table[0];
    if(n === 1) return table[1];
    if(table[n] === undefined){
        table.push(fibonacci(n-1) + fibonacci(n-2));
        console.log(table);
    }
    return table[n];
}

fibonacci(5);
console.log(table);