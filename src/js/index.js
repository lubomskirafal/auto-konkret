import '.././sass/index.scss';


document.addEventListener('DOMContentLoaded', ()=> {
   
});

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', ()=> {
    handleHamburgerClick(hamburger);
})
const manu = document.querySelector('nav');


const handleHamburgerClick = (hamburger)=> {
    // manu.classList.toggle('manu__list--active');
    // manu.addEventListener('click', ()=>handleHamburgerClick(hamburger));
    if(!hamburger.classList.contains('hamburger--active')) {
        hamburger.classList.remove('hamburger--noActive')
        hamburger.classList.add('hamburger--active')
    }else {
        hamburger.classList.add('hamburger--noActive')
        hamburger.classList.remove('hamburger--active');
    };
}; 

