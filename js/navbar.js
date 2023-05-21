const hambar = document.getElementById('hambar')
const responsive_navbar = document.getElementById('response_nav')

const cross_nav = document.getElementById('cross_nav')


hambar.addEventListener('click', () => {
    responsive_navbar.style.left = '0'
    responsive_navbar.style.transition = 'all .5s'
})


cross_nav.addEventListener('click', () => {
    responsive_navbar.style.left = '-100%'
    responsive_navbar.style.transition = 'all .5s'
})