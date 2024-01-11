//Q. "like_off.png" 클릭시 src속성값을 "like_on.png" 변경하기
const like = document.querySelectorAll('.like')
const comment = document.querySelectorAll('.comment')
const send = document.querySelectorAll('.send')
console.log(like);
// like.src = `./images/like_on.png`
// like.src = `./images/like_off.png`
// like.src = `./images/comment_on.png`
// like.src = `./images/comment_off.png` ...동일 규칙명
function onOff(name, status){
    return `./images/${name}_${status}.png`
}
function onOff_v2(target, name, status){
    return target.children[0].src = `./images/${name}_${status}.png`
}
like[0].addEventListener('click',function(){
    // console.log(like)
    // console.log(like.children)
    // console.log(like.children[0])
    // console.log(like.children[0].src) //-> console.log로 어떤게 선택되는지 계속해서 확인해보면서 체크하기
    // like.children[0].src = onOff('like','on');
    onOff_v2(this,'like','on') //첫번째 like는 변수여서 ''를 사용하면 안되고, 두번째 like는 문자열에 들어가서 ''에 넣어줘야 함
})
comment[0].addEventListener('click',function(){
    onOff_v2(this,'comment','on') //this == 현재 이벤트 대상 객체 키워드('이벤트종류',function(){ 이벤트 함수내에서 사용할 때 }) = 내가 클릭한 대상을 그대로 사용하겠다는 뜻
})
send[0].addEventListener('click',function(){
    onOff_v2(this,'paper','on')
})
like[1].addEventListener('click',function(){
    onOff_v2(this,'like','on')
})
comment[1].addEventListener('click',function(){
    onOff_v2(this,'comment','on') //this == 현재 이벤트 대상 객체 키워드('이벤트종류',function(){ 이벤트 함수내에서 사용할 때 }) = 내가 클릭한 대상을 그대로 사용하겠다는 뜻
})
send[1].addEventListener('click',function(){
    onOff_v2(this,'paper','on')
})