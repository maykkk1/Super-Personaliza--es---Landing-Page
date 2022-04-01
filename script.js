// mobile menu
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


// validate form
const formSpanErrors = document.querySelectorAll('.contato form span')
let nameIsValid = false
let emailIsValid = false
let phoneIsValid = false


const nameField = document.getElementById('nome')
const wrongName = () => {
    formSpanErrors[1].style.display = 'block'
    nameIsValid = false
}
const correctName = () => {
    formSpanErrors[1].style.display = 'none'
    nameIsValid = true
}
const validateNome = (nome) =>{
    if (nome.length > 0) {
        correctName()
        nameIsValid = true
    }
}
nameField.addEventListener('blur', validateNome)



const emailField = document.getElementById('email')
const wrongEmail = () => {
    formSpanErrors[1].style.display = 'block'
    emailIsValid = false
}
const correctEmail = () => {
    formSpanErrors[1].style.display = 'none'
    emailIsValid = true
}
const validateEmail = (email) => {
    if(email.length < 1) return formSpanErrors[1].style.display = 'none'
    const emailRegex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")
    emailRegex.test(email)
    ? correctEmail(email)
    : wrongEmail()
}
emailField.addEventListener('blur', (e)=>{
    validateEmail(e.target.value)
})



const phoneField = document.getElementById('telefone')


const validatePhone = (phone) => {
    console.log(phone)
    const phoneRegex = new RegExp('^\\(((1[1-9])|([2-9][0-9]))\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$')
    if(phoneRegex.test(phone)) {
        console.log('O telefone está correto')
    } else {
        console.log('O telefone está errado.')
    }
}

phoneField.addEventListener('blur', (e)=>{
    validatePhone(e.target.value)
})



