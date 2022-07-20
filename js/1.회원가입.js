// const id = document.querySelector('#user-id');
// const pwd1 = document.querySelector('#user-pw1');
// const pwd2 = document.querySelector('#user-pw2');

// id.onchange = checkId;
// pwd1.onchange = checkPwd1;
// pwd2.onchange = comparedPwd2;

// function checkId() {
//   if (id.value.length < 4 || id.value.length > 15) {
//     alert("아이디는 4~15자리 영문, 숫자만 가능합니다.")
//     id.select();
//   }
// }

// function checkPwd1() {
//   if (pwd1.value.length < 8) {
//     alert("비밀번호는 8자리 이상 입력하세요.")
//     pwd1.value = ""
//     pwd1.focus();
//   }
// }

// function comparedPwd2() {
//   if (pwd1.value != pwd2.value) {
//     alert("비밀번호가 맞지 않습니다. 확인해주세요")
//     pwd2.value = ""
//     pwd2.focus();
//   }
// }

const id = document.querySelector('#user-id')
const pw1 = document.querySelector('#user-pw1')
const pw2 = document.querySelector('#user-pw2')

id.onchange = checkId;
pw1.onchange = checkPw1;
pw2.onchange = checkPw2;

function checkId() {
  if (id.value.length < 4 || id.value.length > 15) {
    alert("아이디는 4~15 영문과 숫자로 입력해주세요")
    id.select();
  }
}

function checkPw1() {
  if (pw1.value.length < 8) {
    alert("비밀번호는 8자리 이상 입력해주세요")
    pw1.value = ""
    pw1.focus();
  }
}

function checkPw2() {
  if (pw1.value != pw2.value) {
    alert("비밀번호가 일치하지 않습니다. 확인해주세요")
    pw2.value = ""
    pw2.focus();
  }
}
