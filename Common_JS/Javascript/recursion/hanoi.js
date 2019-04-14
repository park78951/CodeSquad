// function Hanoi() {
//     this.start = [];
//     this.temp = [];
//     this.goal = [];
// }

// Hanoi.prototype.init = function(n) {
//     for(let i = n; i > 0; i--) {
//         this.start.push(i);
//     }
// }

// Hanoi.prototype.game = function(n) {
//     this.temp.push(this.start.pop());
//     this.goal.push(this.start.pop());
//     this.goal.push(this.temp.pop());
// }





// let hanoi = new Hanoi()

// hanoi.init(2);
// hanoi.game();
// console.log(hanoi2.goal);





// function hanoi(n) {
//     for(let i = n; i > 0; i--) {
//         start.push(i);
//     }    
// }

//---------------------------------------------------------
// let start = [2, 1];
// let temp = [];
// let goal = [];

// function hanoi(n, b, c) {
//     if(n === 1) {
//         let t = b.pop();
//         c.push(t);
//         return;
//     }
    
//     hanoi(n-1, start, temp);
//     hanoi(1, start, goal);
//     hanoi(n-1, temp, goal);
    
// }

// hanoi(2, start, goal);

// console.log(goal);

//------------------------------------------------------------

function hanoi(n, from, to) {
	// TODO 하노이의 탑 알고리즘을 구현하세요
	/* 
	   기둥에 있는 원판을 옮길 때 마다
	   "n번 기둥 맨 위의 원판을 m번 기둥으로 이동"
	   이라는 메세지를 console.log로 출력하세요
	*/
    if (n >= 1) {
        const temp = 6 - from - to;
        hanoi(n-1, from, temp);
        console.log(`${from}번 기둥 맨 위의 원판을 ${to}번 기둥으로 이동`);
        hanoi(n-1, temp, to);
    }
}

hanoi(4, 1, 3);