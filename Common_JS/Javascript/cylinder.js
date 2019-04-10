const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    let data = parseInt(line);
    let area = 0;
    
    if(Number.isNaN(data)) {
        throw "숫자를 입력해주세요.";
    } else {
        input.push(data);    
    }

    if (input.length === 2) {
        area = 2 * input[0] * Math.PI * (input[0] + input[1]);
        console.log(`원기둥의 겉넓이는 ${area.toFixed(2)}입니다.`);
        process.exit();
    }
  })    