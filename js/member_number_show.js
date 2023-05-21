// MEmber Show Number

let member_rest_dot = document.querySelector('.member_rest_dot')
let rest_member_number = document.querySelector('.rest_member_number')

function number_show_of_member (e) {
    rest_member_number.classList.toggle('rest_member_number_show')
    member_rest_dot.classList.toggle("member_rest_dot_hide")
}


let send_message_to_member = document.getElementById('send_message_to_member')
let popup_form = document.querySelector('.popup_form')


function close_popup_form () {
    popup_form.classList.toggle("popup_form_show")
}