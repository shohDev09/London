// const topItem =[...document.querySelector('.top-item')],
//     topLink = document.querySelector('.top-link')


//     top-item.forEach(e => {
        
//     });
// var addavtive = document.querySelector('.addavtive')
// if (top-item.style.background == "#BB2339") {
//     top-link.style.color === "#fff";
// }


const icon__icon1 = document.querySelector('.icon__icon1')
const icon__icon2 = document.querySelector('.icon__icon2')
const bars__menu = document.querySelector('.bars__menu')


icon__icon1.addEventListener('click', function () {
    bars__menu.style.display = "block"
    icon__icon1.style.display = "none"
    icon__icon2.style.display = "block"
});

icon__icon2.addEventListener('click', function () {
    bars__menu.style.display = "none"
    icon__icon1.style.display = "block"
    icon__icon2.style.display = "none"
});