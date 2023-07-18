function rideOrWalk(money){
   let getMoney = money;
   if(getMoney > 5000) {
      rideTaxi();
   }else if(getMoney >= 2000) {
      rideBus();
   }else {
      walk();
   }
}

rideTaxi = () => {
   console.log("택시탐");
}

rideBus = () => {
   console.log("버스탐");
}

walk = () => {
   console.log("걸어감");
}

let money = 2000;
console.log(rideOrWalk(money));



function add(x, y) {
   let tmp = x + y;
   return tmp;
}

add2 = (x, y) => {
   let tmp = x + y;
   return tmp;
}


console.log(add(2,3));

console.log(add2(2,4));



let result = ((x,y)=>{return x+y}) (5,2);

console.log(result);

//document.write(add(2,3)); // 웹 브라우저 내용창에 출력
//window.alert(add(2,3)); //브라우져 팝업으로 출력


for (let i = 0; i<10; i++) {
   console.log(i+"반복");
}


myArray = [1,2,3,4,5]

myArray.forEach(element => {
   console.log("나무찍기");
});


var a = 1;
var b = '안녕';
console.log(a+b);