/* mobile navigation */
const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')

hamburger.addEventListener('pointerdown', () => {
    mobileNav.classList.toggle('toggle_nav')
})