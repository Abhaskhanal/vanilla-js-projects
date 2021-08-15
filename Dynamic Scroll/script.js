const topBtn = document.querySelector('.top-btn');
const nav = document.querySelector('.nav');
const ul = document.querySelector('.links-container');
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        topBtn.classList.add('show-top-btn');
    } else {
        topBtn.classList.remove('show-top-btn');
    }

    if (window.pageYOffset > nav.getBoundingClientRect().height) {
        nav.classList.add('fixed-nav')
    } else {
        nav.classList.remove('fixed-nav')
    }
})


hamburger.addEventListener('click', () => {
    ul.classList.toggle('show-links-container');
})