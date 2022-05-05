// active link
let  menu = document.querySelector(".navbar-nav");
const brand = document.querySelector(".navbar-brand");


// link active ketika di click
menu.addEventListener('click', function(e) {
    const targetMenu = e.target;

    if (targetMenu.classList.contains('nav-link')) {
        
        const menuLinkActive = document.querySelector("ul li a.active");

        if (menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {
            menuLinkActive.classList.remove('active');
        }

        targetMenu.classList.add('active');
    }
});

// ketika brand di click, home link active
brand.addEventListener('click', function() {
    const menuLinkActive = document.querySelector("ul li a.active");
    const home = document.querySelector(".navbar-nav li a");

    if (menuLinkActive !== home) {
        menuLinkActive.classList.remove('active');
    }
    home.classList.add('active');
});

// parallax effect
window.addEventListener('scroll', function() {
    let top = scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    document.querySelector(".jumbotron img").style.transform = `TranslateY(calc(${top}px / 1.05))`;
    document.querySelector(".jumbotron h1").style.transform = `TranslateY(calc(${top}px / 1.25))`;
    document.querySelector(".jumbotron p").style.transform = `TranslateY(calc(${top}px / 1.45))`;
});



