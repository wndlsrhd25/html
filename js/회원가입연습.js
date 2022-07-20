const userId = document.querySelector("#user-id");
const email = document.querySelector('#email');
const pw1 = document.querySelector('#pwd1');
const pw2 = document.querySelector('#pwd2');

userId.onchange = checkId;
email.onchange = checkEmail;
pw1.onchange = checkPw1;
pw2.onchange = checkPw2;

function checkId() {
  if (userId.value.length < 4 || userId.value.length > 15) {
    alert("아이디는 4~15자리 영문과 숫자로 만들어주세요")
    userId.select();
  }
};

function checkEmail() {
  if (email.value.includes('@') == false) {
    alert("잘못된 이메일 형식입니다. 다시 입력해주세요")
    email.value = ''
    email.focus();
  }
}

function checkPw1() {
  if (pw1.value.length < 8) {
    alert('비밀번호는 8자리 이상 입력해주세요')
    pw1.value = ""
    pw1.focus();
  }
}

function checkPw2() {
  if (pw1.value != pw2.value) {
    alert("비밀번호를 확인해주세요")
    pw2.value = ""
    pw2.focus();
  }
}