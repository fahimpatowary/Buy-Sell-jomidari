const guestIncrement = () => {
    let count_number = document.getElementById('count_number')
    let result = Number(count_number.innerText) + 1

    count_number.innerText = result
}
const guestDecrement = () => {
    let count_number = document.getElementById("count_number")
    let result = Number(count_number.innerText) - 1

    if (result <= 0) {
        result = 0
    }

    count_number.innerText = result
}


const bedRoomIncrement = () => {
    let bed_room_count_number = document.getElementById('bed_room_count_number')
    let result = Number(bed_room_count_number.innerText) + 1

    bed_room_count_number.innerText = result
}
const bedRoomDecrement = () => {
    let bed_room_count_number = document.getElementById("bed_room_count_number")
    let result = Number(bed_room_count_number.innerText) - 1

    if (result <= 0) {
        result = 0
    }

    bed_room_count_number.innerText = result
}


const bedsIncrement = () => {
    let bed_count_number = document.getElementById('bed_count_number')
    let result = Number(bed_count_number.innerText) + 1

    bed_count_number.innerText = result
}
const bedsDecrement = () => {
    let bed_count_number = document.getElementById("bed_count_number")
    let result = Number(bed_count_number.innerText) - 1

    if (result <= 0) {
        result = 0
    }

    bed_count_number.innerText = result
}


const bathIncrement = () => {
    let bath_count_number = document.getElementById('bath_count_number')
    let result = Number(bath_count_number.innerText) + 1

    bath_count_number.innerText = result
}
const bathDecrement = () => {
    let bath_count_number = document.getElementById("bath_count_number")
    let result = Number(bath_count_number.innerText) - 1

    if (result <= 0) {
        result = 0
    }

    bath_count_number.innerText = result
}