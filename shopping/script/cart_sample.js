// 왼쪽 썸네일 이미지 JS
//1. small_thumnail-a 마우스를 올리면 (ex)small2 마우스를 올렸다면
//2. big_thumnail-img(src) 값이 변경된다. (ex) big1이 big2 이미지 변경

const item_detail = document.querySelector('.item_detail');
const small_thum = item_detail.querySelectorAll('.small_thumnail a');
const big_thum = item_detail.querySelector('.big_thumnail img');
console.log(item_detail, small_thum, big_thum);

small_thum[0].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big1.jpg";
})
small_thum[1].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big2.jpg";
})
small_thum[2].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big3.jpg";
})
small_thum[3].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big1.jpg";
})
small_thum[4].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big2.jpg";
})
small_thum[5].addEventListener('mouseover',function(){
    big_thum.src= "dog_images/big3.jpg";
})

//가격 할인 정보 클릭 시 나오는 정보 팝업
//1. 팝업 숨기기
//2. i 클릭하면 팝업 보이기

const price_info = item_detail.querySelector('.price i[class$=info]')
const price_info_open = item_detail.querySelector('.price .open')
console.log(price_info, price_info_open);

price_info_open.style.display = 'none';
// price_info_open.style = 'display:none';

let price_info_open_status = false
price_info.addEventListener('click',function(){
    if(price_info_open_status == false){
        price_info_open_status = !price_info_open_status
        price_info_open.style.display = 'block';
    }else{
        price_info_open_status = !price_info_open_status
        price_info_open.style.display = 'none';
    }
})

//내일 출발 i 클릭 시 팝업 출력하고 팝업 내 X 클릭 시 팝업 닫히기 JS
//1. 팝업 숨기기
//2. i 클릭 시 팝업 출력
//3. X 클릭 시 팝업 닫히기
//열리면 참 닫히면 거짓 - if문으로 열릴때는 참 / else에는 접힐때 거짓을 보여주기

const delivery_info = item_detail.querySelector('.benefit_shipping i[class$=info]')
const delivery_popup = item_detail.querySelector('.benefit_shipping .open')
const delivery_close = delivery_popup.querySelector('.close')
console.log(delivery_info, delivery_popup, delivery_close);

delivery_popup.style.display = 'none';

let delivery_info_status = false
delivery_info.addEventListener('click',function(){
    if(delivery_info_status == false){
        delivery_info_status = !delivery_info_status
        delivery_popup.style.display = 'block';
    }else{
        delivery_info_status = !delivery_info_status
        delivery_popup.style.display = 'none';
    }
})

delivery_close.addEventListener('click',function(){
    delivery_popup.style.display = 'none';
})

/* 
목표) 배송 1/9 (화) 도착 예정 94% 메뉴를 클릭하면 메뉴 펼침 정보 나타나기

1. 펼침 메뉴 초기 숨기기 - o
2. 배송1/9(화) 도착 예정 94% 메뉴 클릭 시 
3. 위(1)의 둥근 모서리 하단 모양 뾰족하게 변경 - o
4. 위(1)의 94% 옆 화살표 상하 반전 하기 - o
5. 메뉴 펼침 정보 보이기 - o
*/

const delivery_menu = item_detail.querySelector('.delivery_menu')
const delivery_menu_open = item_detail.querySelector('.delivery_menu_open')
const delivery_menu_btn = delivery_menu.querySelector('i[class$=down]')
console.log(delivery_menu, delivery_menu_open, delivery_menu_btn);

delivery_menu_open.style.display = 'none';

let delivery_menu_open_status = false //현재 상태 변수(false==숨김)
delivery_menu_btn.addEventListener('click',function(){
    if(delivery_menu_open_status == false){
        console.log(delivery_menu_open_status) //open
        delivery_menu_open_status = !delivery_menu_open_status
        delivery_menu_open.style.display = 'flex'; //기존에 flex로 디자인을 했기 때문에!
        delivery_menu_btn.style.transform = 'scaleY(-1)';
        delivery_menu.style.borderBottomLeftRadius = '0';
        delivery_menu.style.borderBottomRightRadius = '0';
        //delivery_menu.style = 'border-bottom-left-radius:0; border-bottom-right-radius:0;' //이렇게 해도 됨
    }else{
        console.log(delivery_menu_open_status) //close
        delivery_menu_open.style.display = 'none'; //기존에 flex로 디자인을 했기 때문에!
        delivery_menu_btn.style.transform = 'scaleY(1)';
        delivery_menu.style.borderBottomLeftRadius = '5px';
        delivery_menu.style.borderBottomRightRadius = '5px';
        delivery_menu_open_status = !delivery_menu_open_status
    }
})

//상품 색상, 사이즈 옵션을 선택했을 때 선택 정보가 selectResult에 결과값으로 출력되고 num_result의 구매수량에 따라 order_price에 가격이 출력되는 결과
/* 상품 색상을 선택하지 않으면 사이즈 옵션을 선택 할 수 없음
색상별로 사이즈 옵션이 다르기 때문에 색상별로 사이즈가 묶여있음
상품 색상을 선택하고 사이즈 옵션이 보여서 사이즈를 선택하면 아래에 내가 선택한 옵션이 아래에 뜸
동일한 색상과 사이즈를 누르면 중복되어서 '이미 선택한 옵션입니다.' 팝업창이 뜸
수량을 -+로 조절할 수 있음
수량 숫자를 선택하면 수량을 입력해서 적용할 수 있음
X버튼을 누르면 내가 선택한 옵션이 삭제되고 다시 그 부분에 장바구니/바로구매 버튼이 올라옴
옵션을 선택하지 않고 장바구니/바로구매 버튼을 누르면 '옵션 선택 후에 버튼을 클릭해 주세요.' 팝업창이 뜬다. */
//--------------------------------------------------------
//상세절차 : 상품 색상, 사이즈 옵션을 선택했을 때
//1. 색상(옵션1) 선택 전 사이즈(옵션2) 비활성화
//2. 옵션1 선택시 옵션2 활성화
//2-1. 옵션1에 대한 option데이터에 따라 옵션2의 각 다른 select 활성화
//3. 옵션1 선택 후 옵션2 클릭 시 결과 출력
//3-1. (위) 조건 달성 기준 결과 출력이 되어있는 상태라면 같은 옵션 클릭시 중복 데이터 결과 팝업 출력
//3-2. (위) 조건 달성 기준 결과 출력과 다른 옵션을 클릭 시 추가 데이터 기존 데이터 (위로) 출력
//3-3. (위) 조건 달성 기준 옵션1, 옵션2의 선택 데이터는 초기화됨.
const colorOpt = document.querySelector('#colorOpt')
const sizeOpt = document.querySelector('#sizeOpt')
const selectResult = document.querySelector('.selectResult')
console.log(colorOpt,sizeOpt);
console.log(colorOpt.options[1].value);
console.log(colorOpt.options[1].value.text);
selectResult.style.display = 'none';

sizeOpt.disabled = true; //disable:비활성화 -> size select 비활성화

//colorOpt, sizeOpt text데이터를 모두 변수로 수집 후
//createElement, appendChild를 이용해서 opt1, opt2 선택 데이터 출력하기
const optResult1 = document.createElement('em')
const optResult2 = document.createElement('em')
const resultView = document.querySelectorAll('.selectResult .opt_list span')
console.log(resultView);

//수량 출력하기
const numView = selectResult.querySelector('#num_count');
const priceView = selectResult.querySelector('.order_price');
const priceTotalView = document.querySelector('fieldset:nth-child(2) .order_price');
let num = 1;
let price = 36900;
console.log(num, price, priceTotalView);

colorOpt.addEventListener('change',function(){
    console.log(colorOpt.value)
    console.log(colorOpt.options[colorOpt.selectedIndex].text)
    optResult1.innerHTML = colorOpt.options[colorOpt.selectedIndex].text
    console.log(optResult1);

sizeOpt.disabled = false; //size select 비활성화 -> 활성화로 변경
})
sizeOpt.addEventListener('change',function(){
    //선택 option 데이터 저장하기
    console.log(sizeOpt.options[sizeOpt.selectedIndex].text)
    optResult2.innerHTML = sizeOpt.options[sizeOpt.selectedIndex].text
    console.log(optResult2);
    //선택옵션 부모 보이기
    selectResult.style.display = 'grid';
    selectResult_staus = true
    //선택옵션 적용 대상에 위 option데이터값 출력하기
    resultView[0].appendChild(optResult1)
    resultView[1].appendChild(optResult2)
    //선택옵션의 수량(num) 출력하기
    numView.value = num;
    //선택옵션의 가격(price) 출력하기
    priceView.innerHTML = price.toLocaleString('ko-kr')+'원';
    priceTotalView.innerHTML = price.toLocaleString('ko-kr')+'원';
})

//selectResult 안 X 클릭 시 X의 부모(selectResult)를 DOM관계로 선택해서 숨기기
const close = selectResult.querySelector('.close');
console.log(close);

close.addEventListener('click',function(){
    close.parentElement.style.display = 'none';
    selectResult_staus = false
})
//수량 -,+ 버튼 클릭 시 수량값이 변경되며 그에 따라 가격 변동
const minus = selectResult.querySelector('#minus');
const plus = selectResult.querySelector('#plus');
let total = 0;

//최소구매 수량1, 최대 구매 수량 7
//최소구매 수량입니다.
//재고 7개로 더 구매할 수 없습니다.
plus.addEventListener('click',()=>{
    if(num < 7){
        //1. 수량 1증가
        num++;
        //1-1. 수량 1 증가한 값 표시
        numView.value = num;
        //2. 수량*가격 = 구매가격
        total = num*price;
    }else{
        alert('재고 7개로 더 구매할 수 없습니다.')
    }

    //3. 구매가 세자리 콤마 표시
    priceView.innerHTML = total.toLocaleString('ko-kr')+'원'
    priceTotalView.innerHTML = total.toLocaleString('ko-kr')+'원'
})

minus.addEventListener('click',()=>{
    if(num > 1){    
        num--;
        numView.value = num;
        total = num*price;
        priceView.innerHTML = total.toLocaleString('ko-kr')+'원';
        priceTotalView.innerHTML = total.toLocaleString('ko-kr')+'원';
    }else{
        alert('최소 구매 수량 입니다.')
    }
})

const cartBtn = document.querySelector('#cart')
const buyBtn = document.querySelector('#buy')
let selectResult_staus = false
// console.log()
cartBtn.addEventListener('click',()=>{
    if(selectResult_staus == false){
        alert('옵션 선택 후에 버튼을 클릭해 주세요.')
    }else{
        alert('장바구니에 상품이 담겼습니다.')
    }
})
buyBtn.addEventListener('click',()=>{
    if(selectResult_staus == false){
        alert('옵션 선택 후에 버튼을 클릭해 주세요.')
    }else{
        confirm('상품 구매하는 페이지로 이동하시겠습니까?')
    }
})