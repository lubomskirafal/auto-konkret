import '.././sass/index.scss';


document.addEventListener('DOMContentLoaded', ()=> {
   
});

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', ()=> {
    handleHamburgerClick();
})
const manu = document.querySelector('.manu');
const manuBgListener = document.querySelector('.manu li:nth-child(1)')


const handleHamburgerClick = ()=> {

    if(!manu.classList.contains('manu--active')) {
        manu.classList.remove('manu--noActive')
        manu.classList.add('manu--active')
    }else {
        manu.classList.add('manu--noActive')
        manu.classList.remove('manu--active');
    };

    manuBgListener.addEventListener('click', ()=>handleHamburgerClick());

    if(!hamburger.classList.contains('hamburger--active')) {
        hamburger.classList.remove('hamburger--noActive')
        hamburger.classList.add('hamburger--active')
    }else {
        hamburger.classList.add('hamburger--noActive')
        hamburger.classList.remove('hamburger--active');
    };
}; 

window.addEventListener('resize', ()=> {
    if(window.innerWidth > 1200) {
        manu.classList.remove('manu--active');
        manu.classList.remove('manu--noActive');
        hamburger.classList.remove('hamburger--active');
        hamburger.classList.remove('hamburger--noActive');
    }
})

