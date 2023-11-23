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

console.log(window.screen.width > 480)
window.addEventListener('resize', () => {
    if (window.screen.width > 480) {
        nav.style.width = "0"
        nav.style.position = "fixed"
        show.style.width = "7rem"
        hide.style.width = "0"
    }

})