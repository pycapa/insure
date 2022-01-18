const mnuBtn = document.querySelector('#mnuBtn')
const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body')



mnuBtn.addEventListener('click', function(){

   // const img = document.createElement('img')

    if(mnuBtn.classList.contains('open')){ // close Hamburger menu
        mnuBtn.classList.remove('open')
        overlay.classList.add('fade-out')
        overlay.classList.remove('fade-in')
        menu.style.display='none'
        body.classList.remove('noscroll')


/*         if (overlay.childElementCount > 0){
            overlay.removeChild(overlay.firstElementChild)
        }
 */        

    } else {
        mnuBtn.classList.add('open')
        overlay.classList.remove('fade-out')
        overlay.classList.add('fade-in')
        menu.style.display='flex' // open hamberguer menu
        body.classList.add('noscroll')

        //img.setAttribute('src',"/images/bg-pattern-mobile-nav.svg")
        //overlay.appendChild(img)

        overlay.classList.add('overlay-show') 
        
    }
})/* 

<img src="/images/bg-pattern-mobile-nav.svg" alt=""> */