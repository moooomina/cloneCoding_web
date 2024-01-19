const btn = document.querySelectorAll('button')
const bg = document.querySelectorAll('.bg')
console.log(btn,bg)

// btn[0].addEventListener('click',()=>{
//     window.scrollTo({left:0,top:bg[0].offsetTop})
// })
// btn[1].addEventListener('click',()=>{
//     window.scrollTo({left:0,top:bg[1].offsetTop})
// })
// btn[2].addEventListener('click',()=>{
//     window.scrollTo({left:0,top:bg[2].offsetTop})
// })
// btn[3].addEventListener('click',()=>{
//     window.scrollTo({left:0,top:bg[3].offsetTop})
// })

// for(let i=0; i<btn.length; i++){
//     btn[i].addEventListener('click',()=>{
//     window.scrollTo({left:0,top:bg[i].offsetTop})
//     })
// }

btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        window.scrollTo(0, bg[i].offsetTop)
    })
})

//a태그로 했을 시
// link_a.forEach((t,i)=>{
//     t.addEventListener('click',(e)=>{
//         e.prevetDefault()
//         window.scrollTo(0, bg[i].offsetTop)
//     })
// })
//a태그로 버튼 동작을 하려고 하면 a태그의 속성 href 때문에, 다른 페이지로 이동하려고 동작을해서 버튼동작과 충돌하게 되는데, 그럴때는 매개변수를 만들어준 후, 매개변수명.prevetDefault()적어주면 된다. 