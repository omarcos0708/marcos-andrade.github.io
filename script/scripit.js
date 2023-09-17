const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

window.addEventListener("scroll", () => {
    header.style.opacity = window.pageYOffset > 120 ? "1" : "0";
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    if (window.scrollY === 0) {
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    }
}
