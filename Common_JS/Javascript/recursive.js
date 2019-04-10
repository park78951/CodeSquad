// function factorial(n) {
//     return n === 1 ? n : n * factorial(n - 1);
// }

// function gugudan2(n) {
//     console.log(2 + ' * ' + n + " = " + (n*2));
//     if(n === 9) {
//         console.log('end');
//         return;
//     } else {
//         gugudan2(n+1);
//     }
// }

function fibo(n) {
    return n <= 1 ? 1 : fibo(n-1) + fibo(n-2);
}

fibo(10);