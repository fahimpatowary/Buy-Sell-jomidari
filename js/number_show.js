
// Number Show and Hide

let number_dot = document.querySelector('.number_dot')
let click_number = document.getElementById('client_number_show_btn')
let rest_number = document.querySelector('.rest_number')


click_number.addEventListener('click', () => {
    number_dot.classList.toggle('dot_number')
    rest_number.classList.toggle('show_rest_number')
})

