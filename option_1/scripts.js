//nav on smaller screen
const nav = document.querySelector('#nav-menu')
const show = document.querySelector('.show')
const hide = document.querySelector('.hide')


function applyStyle() {
    nav.style.width = '70%'
    nav.style.position = "absolute"
    show.style.width = "0"
    hide.style.width = "7rem"
}

function resetStyle() {
    nav.style.width = "0"
    nav.style.position = "fixed"
    show.style.width = "7rem"
    hide.style.width = "0"
}
show.addEventListener('mouseup', applyStyle)

hide.addEventListener('mouseup', resetStyle)

window.addEventListener('resize', () => {
    if (window.screen.width > 480) {
        location.reload()
    }
})

//autoscroll if width exceeds
const autoscroll = document.querySelector('.autoscroll')
const item = Array.from(autoscroll.children)
if (autoscroll.parentElement.clientWidth < autoscroll.clientWidth) {
    item.forEach(x => {
        const duplicatedItem = x.cloneNode(true)
        autoscroll.appendChild(duplicatedItem)
    })
    autoscroll.classList.add('animate')
}

//phone call
const call = document.querySelectorAll('.callto')
call.forEach(item => {
    item.addEventListener('click', () => {
        const phoneNo = '+8323902949'
        window.location.href = `tel:${phoneNo}`
    })
})

//carousel 
/**
 * if the parent of carousel width exceeds window width then add carousel auto child to every immediate childs class
 */
const carouselParent = document.querySelector('.carousel')
const leftItem = carouselParent.querySelector('.left-item')
const rightItem = carouselParent.querySelector('.right-item')
const carouselAuto = carouselParent.querySelector('.carousel-auto')
let carouselChilds = Array.from(carouselAuto.children)
let width = carouselChilds[0].getBoundingClientRect().width
console.log(carouselChilds.reduce((x, y) => { return x + y.clientWidth }, 0))
leftItem.addEventListener('click', function (e) {
    console.log(e)
    console.log(carouselAuto.style)
    carouselAuto.style.transform = `translateX(-${width + 30}px)`
})









//form validation
const regExps = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\+?[0-9()-.\s]{10,}$/,
    name: /[a-zA-Z]+/,
    text: /^[a-zA-Z0-9\s.,;:'"&()!?]+$/,
}

const formA = document.querySelector('#formA')
const formB = document.querySelector('#formB')
//realtime warning
function formValidator(event) {
    const warning = this.querySelector('.warning')
    let test = regExps[event.target.dataset.validator].test(event.target.value)
    if (!test && !event.target.value == '') {
        event.target.validationMessage = `Please enter valid ${event.target.dataset.validator}`
        warning.innerText = `Please enter valid ${event.target.dataset.validator}`
        warning.style.visibility = "initial"
        event.target.style.borderColor = 'red'
    } else {
        warning.style.visibility = "hidden"
        event.target.style.borderColor = 'var(--border-form)'
    }
}
//submit blocker
function allValidator(e) {
    const warning = this.querySelector('.warning')
    let inp = this.querySelectorAll('input, textarea')
    let inputs = Array.from(inp)
    let warnings = []
    inputs.forEach(elem => {
        if (!regExps[elem.dataset.validator].test(elem.value)) {
            warnings.push(elem.dataset.validator)
        }
    })
    if (warnings.length > 0) {
        warning.innerText = `Please provide valid ${warnings.join(', ')}`
        warning.style.visibility = "initial"
        e.preventDefault()
    } else {
        warning.style.visibility = "hidden"
    }
}
formA.addEventListener('change', formValidator)
formA.addEventListener('submit', allValidator)
formB.addEventListener('change', formValidator)
formB.addEventListener('submit', allValidator)
//video popup
const videoContainer = document.querySelector('#vid-popup')
const playPause = document.querySelector('.controls')
const stopPlay = document.querySelector('.closebtn')
playPause.addEventListener('click', () => {
    videoContainer.style.display = 'initial'
})
stopPlay.addEventListener('click', () => {
    videoContainer.style.display = 'none'
})