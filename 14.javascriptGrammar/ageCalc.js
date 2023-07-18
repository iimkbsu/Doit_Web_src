var cDate = new Date();
var cYear = cDate.getFullYear();
let yYear;




const readline = require("readline");
const rl = readline.createInterface({
   input : process.stdin,
   output : process.stdout,
});

rl.on('line', (line) => {
   console.log("태어난 년도를 입력하세요 : ")
   yYear = parseInt(line);
   rl.close();
})

rl.on('close', () => {
   process.exit();
})

function calcAge(yYear) {
   var cAge = cYear - yYear + 1;
   return cAge;
}


console.log(calcAge(yYear));