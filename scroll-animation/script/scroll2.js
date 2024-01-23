const body = document.querySelector('html,body')
const link_a = document.querySelectorAll('.link a')
const bg = document.querySelectorAll('.bg')
const nav_a = document.querySelectorAll('nav a')
const circle = document.querySelector('.circle')

//첫번째 자식에게 먼저 active 활성화
link_a[0].classList.add('active')

bg.forEach((obj, idx)=>{
    console.log(bg[idx].offsetTop)
})

//스크롤 했을 때(scroll) / 각 bg의 위치에 닿으면(if-offsetTop) / link-a 색상이 변경(classList)되고 싶다
window.addEventListener('scroll',()=>{
    link_a.forEach((obj, idx)=>{
        if(body.scrollTop >= bg[idx].offsetTop-200){ //window.scrollTop을 인식을 못해서 전체 변수를 하나 만들어주고 적용하면 된다. / scroll을 다 내려야 옆에 선이 활성화 되므로 너무 느리면 offsetTop값을 -로 빼주면 된다. 
            console.log('..')
            //초기화 함수 호출
            link_a_remove()
            link_a[idx].classList.add('active')
        }
    })
})

//클래스 초기화 함수 생성
const link_a_remove = ()=>{
    for(let i of link_a){i.classList.remove('active')}
/*     
    link_a[0].classList.remove('active')
    link_a[1].classList.remove('active')
    link_a[2].classList.remove('active')
    link_a[3].classList.remove('active') 
    (이거랑 동일)
*/
}

//nav-a 클릭 시 각 bg1~4 위치로 스크롤 이동(이벤트+for문)
//D 클릭 시 bg4로 이동
// nav_a[3].addEventListener('click',(e)=>{
//     e.prevetDefault()
//     window.scrollTo(0, bg[3].offsetTop)
// })

nav_a.forEach((obj, idx)=>{
    obj.addEventListener('click',(e)=>{
        e.preventDefault //a태그의 href 속성을 제어해주는 기능
        window.scrollTo(0, bg[idx].offsetTop)
    })
})

//mouse 따라다니는 효과
window.addEventListener('mousemove',(e)=>{
    console.log(`clientX=${e.clientX}`)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})