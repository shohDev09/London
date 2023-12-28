const icon__icon1 = document.querySelector('.icon__icon1')
const icon__icon2 = document.querySelector('.icon__icon2')
const menu_bars = document.querySelector('.menu_bars')


icon__icon1.addEventListener('click', function () {
    menu_bars.style.display = "block"
    icon__icon1.style.display = "none"
    icon__icon2.style.display = "block" 
});

icon__icon2.addEventListener('click', function () {
    menu_bars.style.display = "none"
    icon__icon1.style.display = "block"
    icon__icon2.style.display = "none"
});