let start = [];
let temp = [];
let goal = [];

function makeStart(n){
    for(let i = n; i > 0 ; i--){
        start.push(i);
    }
    outHanoi(A);
}

function changeToArray(number){
    switch(number){
        case 1 : 
            return start;
        case 2: 
            return temp;
        case 3: 
            return goal; 
    }
}

function hanoi(n, s, g) {
    let t = 6-s-g;
    if(n === 0){
        return;
    }
    hanoi(n-1,s,t);
    changeToArray(g).push(changeToArray(s).pop());
    outHanoi(A);
    hanoi(n-1,t,g);
}

function getHanoi(A){
    
    makeStart(A);
    hanoi(A,1,3);
}


function outHanoi(n){
    console.log(` `);
    for(let i = n; i >= 0; i --){
        console.log(`  ${start[i] === undefined ? '|' : start[i]}  ${temp[i] === undefined ? '|' : temp[i]}  ${goal[i] === undefined ? '|' : goal[i]}`)

    }
    console.log(`-----------`);
}


const A = 3;
getHanoi(A);