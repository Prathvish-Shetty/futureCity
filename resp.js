burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list'); // Changed from navlist
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', () => {
    navList.classList.toggle('v-classresp'); // Changed from nav-list
    rightNav.classList.toggle('v-classresp');
    navbar.classList.toggle('h-navresp');
});
