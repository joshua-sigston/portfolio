// mobile nav menu
const hamburger = document.getElementById('hamburger')
const pattyOne = document.getElementById('patty-one')
const pattyTwo = document.getElementById('patty-two')
const pattyThree = document.getElementById('patty-three')
const nav = document.getElementById('nav')

const navItem = document.querySelectorAll('.nav_item')

hamburger.addEventListener('pointerdown', () => {
    pattyOne.classList.toggle('shift_right')
    pattyThree.classList.toggle('shift_right')

    pattyTwo.classList.toggle('shift_left')

    nav.classList.toggle('nav_show')
})

navItem.forEach( (item) => {
    item.addEventListener( 'pointerdown', () => {
        console.log(item)
        nav.classList.toggle('nav_show')
    })
})