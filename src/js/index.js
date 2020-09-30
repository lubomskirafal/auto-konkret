import '.././sass/index.scss';
import { Luminous } from 'luminous-lightbox';



const gallery = document.querySelectorAll('.gallery a');

gallery.forEach(img=> new Luminous(img));

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

//paralax backgroun

const paralaxImg = document.querySelector('.paralax__inner');



const paralaxBackground = ()=> {

    const scrollY = window.scrollY;
    const windowH = window.innerHeight;
        
    const bgcOffset = paralaxImg.getBoundingClientRect().top;
    const bgcHeight = parseInt(getComputedStyle(paralaxImg).height);
    
    if(bgcOffset<windowH*1.01&&bgcOffset+bgcHeight>-300) {
        const value = (scrollY*0.001).toFixed(2);
        paralaxImg.style.transform = ` translateY(${value*200}px)`;
    }
};

window.addEventListener('scroll', paralaxBackground);
window.addEventListener('resize', paralaxBackground);