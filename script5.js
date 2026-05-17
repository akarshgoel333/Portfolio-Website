let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Corrected click toggle logic
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                // Clean selector interpolation
                let activeLink = document.querySelector(`header nav a[href*='${id}']`);
                if(activeLink) activeLink.classList.add('active');
            });
            
            // Auto close mobile drawer on section change/scroll action
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
}