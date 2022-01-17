const mnuBtn = document.querySelector('#mnuBtn')
const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.header__menu')



mnuBtn.addEventListener('click', function(){

    const img = document.createElement('img')

    if(mnuBtn.classList.contains('open')){ // open 
        mnuBtn.classList.remove('open')
        overlay.classList.add('fade-out')
        overlay.classList.remove('fade-in')
        menu.style.display='none'


        if (overlay.childElementCount > 0){
            overlay.removeChild(overlay.firstElementChild)
        }
        

    } else {
        menu.style.display='flex'

        overlay.classList.remove('fade-out')
        overlay.classList.add('fade-in')
        img.setAttribute('src',"/images/bg-pattern-mobile-nav.svg")
        mnuBtn.classList.add('open')
        overlay.classList.add('overlay-show') 
        overlay.appendChild(img)
        
    }
})/* 

<img src="/images/bg-pattern-mobile-nav.svg" alt=""> */