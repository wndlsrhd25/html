let min;
let sec;
let timer;

function startTimer() {
  min = document.querySelector("#startMin").value;
  if (min == "") min = 0;
  sec = document.querySelector("#startSec").value;
  if (sec == "") sec = 0;
  timer = setInterval(countTimer, 1000);
}

function countTimer() {
  if (sec != 0) {
    if (sec < 11) {
      sec--;
      document.querySelector("#display").innerText = min + " : 0" + sec;
    } else {
      sec--;
      document.querySelector("#display").innerText = min + " : " + sec;
    }
  } else {
    if (min != 0) {
      min--;
      sec = 59;
    } else {
      clearTimer(timer);
      document.querySelector("#display").innerText = "종료";
    }
  }
}

function resetTimer() {
  clearTimer(timer);
}

function clearTimer(t) {
  clearInterval(t);
  document.querySelector("#display").innerText = "";
  document.querySelector("#startMin").value = "";
  document.querySelector("#startSec").value = "";
}
