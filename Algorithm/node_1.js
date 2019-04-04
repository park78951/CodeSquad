const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let sum = 0;

rl.on('line', function(line) {
    input.push(line);
})
.on('close', function() {
    for(let i = 0; i < input.length; i++) {
        sum += parseInt(input[i]);
    }
    console.log(sum);
    process.exit();
})