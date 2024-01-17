//로그인 탭 제목 클릭 시 해당 내용 활성화 JS
//0. (초기) 로그인내용O, 일회용내용X, QR코드내용X, ID로그인 제목 활성화(CSS)
//1. ID로그인을 클릭하면 로그인내용O, 일회용내용X, QR코드내용X
//2. 일회용 클릭하면 로그인내용X, 일회용내용O, QR코드내용X
//3. QR코드 클릭하면 로그인내용X, 일회용내용X, QR코드내용O
//제목 변수
const login_title = document.querySelectorAll('.login_title h2 > a')
//내용 변수
const id_login_container = document.querySelector('.login_container .id_login')
const disposable_login_container = document.querySelector('.login_container .disposable_login')
const qr_login_container = document.querySelector('.login_container .qr_login')
console.log(login_title)
console.log(id_login_container)
console.log(disposable_login_container)
console.log(qr_login_container)

//변수 생성 후 초기모습 설정해놓기(일회용, QR 내용 숨기기)
disposable_login_container.style.display = 'none'
qr_login_container.style.display = 'none'
//초기값 ID로그인 활성화 시키기(active) *클릭 전
login_title[0].parentElement.classList.add('active')

//ID로그인 클릭하면 로그인내용O, 일회용내용X, QR코드내용X
login_title[0].addEventListener('click',()=>{
    id_login_container.style.display = 'block'
    disposable_login_container.style.display = 'none'
    qr_login_container.style.display = 'none'
    login_title[0].parentElement.classList.add('active')
    login_title[1].parentElement.classList.remove('active')
    login_title[2].parentElement.classList.remove('active')
})
//일회용 클릭하면 로그인내용X, 일회용내용O, QR코드내용X
login_title[1].addEventListener('click',()=>{
    id_login_container.style.display = 'none'
    disposable_login_container.style.display = 'block'
    qr_login_container.style.display = 'none'
    login_title[0].parentElement.classList.remove('active')
    login_title[1].parentElement.classList.add('active')
    login_title[2].parentElement.classList.remove('active')
})

//QR코드 클릭하면 로그인내용X, 일회용내용X, QR코드내용O
login_title[2].addEventListener('click',()=>{
    id_login_container.style.display = 'none'
    disposable_login_container.style.display = 'none'
    qr_login_container.style.display = 'block'
    login_title[0].parentElement.classList.remove('active')
    login_title[1].parentElement.classList.remove('active')
    login_title[2].parentElement.classList.add('active')
})

//=========================================================
console.log('로그인 메세지 출력============================')
//아이디 로그인 시 틀린 정보 또는 입력되지 않은 정보에 따라 error message 출력하기
//2. 아이디 미입력 후 로그인 버튼 클릭 => "아이디를 입력해주세요"
//2. 아이디 입력, 비밀번호 미입력 후 로그인 버튼 클릭 => "비밀번호를 입력해주세요"
//3. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞지 않다면 => "아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
//4. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞다면 => 로그인 성공 팝업 "어서오세요 OO님"

const userIdInput = document.querySelector('#userId');
const userPwInput = document.querySelector('#userPw');
const error_message = document.querySelector('.error_message');
const loginBtn = document.querySelector('#loginBtn');
const userList = [{
    id:'admin',
    pw:'1234'
}]
console.log(userIdInput,userPwInput,error_message,loginBtn);

console.log(userIdInput.value)
console.log(userIdInput.value == '')

loginBtn.addEventListener('click',()=>{
    if(userIdInput.value == ''){//아이디 빈 문자열 검사 -> 참이라면
        error_message.innerHTML = '아이디를 입력해주세요' //참일 때 실행
    }else if(userPwInput.value == ''){
        error_message.innerHTML = '비밀번호를 입력해주세요'
    }else if(userIdInput.value == userList[0].id && userPwInput.value == userList[0].pw){
        alert(`어서오세요 ${userList[0].id}님`)
    }else{
        error_message.innerHTML = '아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br>입력하신 내용을 다시 확인해주세요.'
        userPwInput.value = ''
    }
})

//일회용 로그인 error_message
const disposable_loginBtn = document.querySelector('#disposable_loginBtn')
const userNum = document.querySelector('#userNum')
const disposable_loginBtn_error = document.querySelector('.disposable_login .error_message')
console.log(disposable_loginBtn,userNum)

//번호 미입력시 = '일회용 로그인 번호를 입력하세요.'
//번호가 틀렸을 시 = '일회용 로그인 번호를 확인한 후 다시 입력해 주세요.'
disposable_loginBtn.addEventListener('click',()=>{
    if(userNum.value == ''){
        disposable_loginBtn_error.innerHTML = '일회용 로그인 번호를 입력하세요.'
    }else{
        disposable_loginBtn_error.innerHTML = '일회용 로그인 번호를 확인한 후 다시 입력해 주세요.'
        userNum.value = ''
    }
})