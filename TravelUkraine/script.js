const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const heroBtn = document.querySelector('.hero-btn');

heroBtn.addEventListener('click', () => {

    window.scrollTo({
        top: document.querySelector('#cities').offsetTop - 70,
        behavior: 'smooth'
    });

});

const buttons = document.querySelectorAll('.card-btn');

buttons.forEach(button => {

    button.addEventListener('click', () => {

    });

});

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event){

    event.preventDefault();

    alert('Повідомлення успішно надіслано!');

    form.reset();

});