let price = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
let lengt = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function cutRod(price, n) {
    let arr = [0];
    if(n===0) return 0;
    for(let i = 1; i <= n; i++) {
        let q = 0;
        for(let j = 0; j <= i; j++){
            q = Math.max(q, price[j]+price[i-j] )
        }   
        arr[i] = q;
    }
    console.log(arr);
    return arr[n]
}

cutRod(price, 5);
