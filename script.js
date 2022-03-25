const hamburguerMenuBtn = document.getElementById('menu-btn')
let isMobileMenuVisilbe = false

const showMobileMenu = () => {
    const moblieMenu = document.getElementById('menu')
    if(isMobileMenuVisilbe) {
        moblieMenu.classList.remove('open')
        hamburguerMenuBtn.classList.remove('open')
        isMobileMenuVisilbe = false
    } else {
        moblieMenu.classList.add('open')
        hamburguerMenuBtn.classList.add('open')
        isMobileMenuVisilbe = true
    }
}

hamburguerMenuBtn.addEventListener('click', showMobileMenu)