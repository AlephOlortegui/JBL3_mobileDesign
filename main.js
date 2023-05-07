const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const lis = document.querySelectorAll('.nav .nav_link')
const body = document.querySelector('body')

function clickMenu() {
    if(window.innerWidth < 768){
        burger.classList.toggle('active')
        nav.classList.toggle('active')
        lis.forEach((li,index) =>{
            //if the animation exits – reboot it           otherwise set the animation
            li.style.animation ?  li.style.animation='' : li.style.animation = `showLi 0.5s ease forwards ${index/5 + 0.3}s`
        })
        body.classList.toggle('stop-scrolling')
    }
}

burger.addEventListener('click', clickMenu)
lis.forEach(li => li.addEventListener('click',clickMenu));

// Speakers part
const checkbox = document.getElementById('checkbox');
const products = document.querySelector('.products');
checkbox.addEventListener('click',()=>{
    products.classList.toggle('active');
})


// Footer Toggle Class
const f_title = document.querySelectorAll('.f_menu_item_head')
f_title.forEach(head => {
    head.addEventListener('click', () => {
        if(window.innerWidth < 768){
            f_title.forEach(item => {
                item !== head && item.classList.remove('active')
            })

            head.classList.toggle('active')
        }
    })
})

//CHat
const startChat = document.querySelector('.start_chat')
const chatBox = document.querySelector('.chat_box')
const closeForm = document.querySelector('.close_form')
const chatForm = document.getElementById('chat_form')
startChat.addEventListener('click',() => {
    startChat.classList.add('active')
    chatBox.classList.add('active')
})
closeForm.addEventListener('click', ()=>{
    startChat.classList.remove('active')
    chatBox.classList.remove('active')
})
chatForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(chatForm.chat_name.value)
    console.log(chatForm.chat_email.value)
})

// Window resize
window.addEventListener('resize', ()=>{
    if(window.innerWidth >= 768){
        burger.classList.remove('active')
        nav.classList.remove('active')
        body.classList.remove('stop-scrolling')
        lis.forEach(li => li.style.animation = '')

        //Reset footer
        f_title.forEach(head => head.classList.remove('active'))
    }
})

