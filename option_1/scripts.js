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
// const carouselParent = document.querySelectorAll('.carousel-auto')

// function scroller() {

// }

//form validation
const regExps = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
    phone: /^\+?[0-9()-.\s]{10,}$/g,
    name: /^[a-zA-Z]+$/g,
    text: /^[a-zA-Z0-9\s.,;:'"&()!?]+$/g
}

const inputs = document.querySelectorAll('input, textarea')
const warning = document.querySelector('.warning')

inputs.forEach(elem => {
    elem.addEventListener('change', () => {
        let test = regExps[elem.dataset.validator].test(elem.value)
        console.log(test)

        if (!test && !elem.value == '') {
            warning.innerText = `Please enter valid ${elem.dataset.validator}`
            warning.style.visibility = "initial"
        } else {
            warning.style.visibility = "hidden"
        }
    })
})


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