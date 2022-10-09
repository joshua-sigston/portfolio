const hamburger = document.getElementById('hamburger-menu')
const mobileNav = document.getElementById('mobile-nav')
const hamburgerPatty = document.querySelector('.hamburger_line')

hamburger.addEventListener('click', () => {
    hamburgerPatty.classList.toggle('is_active')
    // hamburger.classList.add('hamburger_transform')
    mobileNav.classList.toggle('mobile_nav_reveal')
})

const mobileLink = document.querySelectorAll('.mobile_link')

mobileLink.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.toggle('mobile_nav_reveal')
        hamburgerPatty.classList.toggle('is_active')
    })
})