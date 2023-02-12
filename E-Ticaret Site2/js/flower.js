let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header, .flex .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
$('.owl-carousel2').owlCarousel({
    loop:true,
    margin: 30,
    nav: true,
    dots: false,
    navText:["<i class ='far fa long-arrow-alt-left'></i>","<i class ='far fa long-arrow-alt-left'></i>"],
    items:2 
})
