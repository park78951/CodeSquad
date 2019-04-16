const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let data = parseInt(line);
  let area = 0;

  if(Number.isNaN(data)) {
    throw "숫자를 입력해주세요.";
  } else {
    area = data * data * Math.PI;
  }

  console.log(`원의 넓이는 ${area.toFixed(2)}입니다.`);
  process.exit();
  })