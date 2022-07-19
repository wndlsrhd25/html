
//   let now = new Date();
//   let firstDay = new Date("2018-04-04");
//   let toNow = now.getTime();//밀리세컨드로 얻어야함
//   let toFirst = firstDay.getTime(); //밀리세컨드로 얻어야함
//   let meetTime = toNow - toFirst;
//   let meetDay = Math.round(meetTime/(1000*60*60*24));
//   document.querySelector("#accent").innerText = meetDay+'일';

//   calcDate(100);
//   calcDate(200);
//   calcDate(365);
//   calcDate(500);

//   function calcDate(days){
//     let future = toFirst+days*(24*60*60*1000);
//     let someday = new Date(future);
//     let year = someday.getFullYear();
//     let month = someday.getMonth()+1; //0부터 시작해서 +1해줘야함
//     let day = someday.getDate();

//     document.querySelector("#date"+days).innerText
//     = `${year}년 ${month}월 ${day}일`;

// }
  
let now = new Date();
let firstDay = new Date("2018-12-25")
let meetTime = now - firstDay;
let meetDay = Math.floor(meetTime / (1000 * 60 * 60 * 24));
document.querySelector("#accent").innerText = meetDay + "일";

let firstDate = firstDay.getTime(); //밀리세컨드? 그걸로 바꿔야함

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days) {
  let future = firstDate + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let day = someday.getDate();

  document.querySelector("#date" + days).innerText
    = `${year}년 ${month}월 ${day}일`;
}
