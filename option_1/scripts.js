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
const autoscroll = document.querySelectorAll('.autoscroll *')
let contentWidth = window.screen.width - (window.screen.width * 0.2)
if (contentWidth < Array.from(autoscroll).reduce((x, y) => { return x + y.clientWidth }, 0)) {
    autoscroll.forEach(elem => {
        elem.classList.add('autoscroll-child')
    })
}

//carousel 
/**
 * if the parent of carousel width exceeds window width then add carousel auto child to every immediate childs class
 */
const carouselParent = document.querySelectorAll('.carousel-auto')

function scroller() {

}

//form validation


//phone call
const call = document.querySelectorAll('.callto')
call.forEach(item => {
    item.addEventListener('click', () => {
        const phoneNo = '+8323902949'
        window.location.href = `tel:${phoneNo}`
    })
})