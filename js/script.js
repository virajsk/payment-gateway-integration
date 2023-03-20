burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
menu=document.querySelector('.menu')

burger.addEventListener('click',()=>{
    menu.classList.toggle('visibility');
    navbar.classList.toggle('nav-height')
})