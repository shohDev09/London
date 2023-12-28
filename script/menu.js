const icon__icon1 = document.querySelector('.icon__icon1')
const icon__icon2 = document.querySelector('.icon__icon2')
const menu__bars = document.querySelector('.menu__bars')
const inline = document.querySelector('.inline')


icon__icon1.addEventListener('click', function () {
    menu__bars.style.display = "block"
    icon__icon1.style.display = "none"
    icon__icon2.style.display = "block" 
});

icon__icon2.addEventListener('click', function () {
    menu__bars.style.display = "none"
    icon__icon1.style.display = "block"
    icon__icon2.style.display = "none"
});

// menu__bars.addEventListener('click', function () {
//     menu__bars.style.display = "none"
//     icon__icon2.style.display = "none"
//     icon__icon1.style.display = "block"
// })