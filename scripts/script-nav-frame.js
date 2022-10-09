const navFrame = document.querySelectorAll('.nav_frame')
window.addEventListener('scroll', () => {
    // const navFrame = document.getElementById('nav-frame')
    if (window.scrollY >= 600) {
        navFrame.forEach( frame => {frame.classList.remove('inactive')})
        // navFrame.classList.remove('inactive')
    } else {
        navFrame.forEach( frame => {frame.classList.add('inactive')})
        // navFrame.classList.add('inactive')
    }
})