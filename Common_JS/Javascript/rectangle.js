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
        area = input[0] * input[1];
        console.log(`사각형의 넓이는 ${area}입니다.`);
        process.exit();
    }
  })