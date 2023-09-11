//password show/hide

const check = document.getElementById('check')
const pwd = document.getElementById('password')

const check2 = document.getElementById('secondCheck')
const pwd2 = document.getElementById('secondPassword')

check2.onclick = function (e) {
    pwd2.type = check2.checked ? 'text' : 'password'
}

check.onclick = function (e) {
    pwd.type = check.checked ? 'text' : 'password'
}


// moving transistion

const firstRegister = document.getElementById('first-register'),
registerBtn = document.getElementById('register'),
secondRegister = document.getElementById('second-register'),
alreadybtn = document.getElementById('changeZ')

alreadybtn.addEventListener('click' ,() =>{
    secondRegister.classList.add('show')
    firstRegister.classList.remove('show2')
})

registerBtn.addEventListener('click' , () =>{
    firstRegister.classList.add('show2')
    secondRegister.classList.remove('show')
})