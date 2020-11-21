// SHOW MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

        if(toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show-menu');
            });
        }
};

showMenu('nav-toggle', 'nav-menu');

// REMOVE MENU ON MOBILE
const navLink = document.querySelectorAll('.nav__link');
function hideMenus() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(link => link.addEventListener('click', hideMenus));

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');
function menuActiveOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
            }
    });
}

window.addEventListener('scroll', menuActiveOnScroll);

// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >= 200) {
        header.classList.add('scrolling');
    } else {
        header.classList.remove('scrolling');
    }
}

window.addEventListener('scroll', scrollHeader);