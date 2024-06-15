window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var nav = document.querySelector('nav');

    if (scrollPosition > 100) {
        nav.classList.add('scrolling');
    } else {
        nav.classList.remove('scrolling');
    }
});