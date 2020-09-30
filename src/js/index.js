import '.././sass/index.scss';
import initCookies from './components/cookies';
import smoothScroll from './components/smoothScroll';
import { Luminous } from 'luminous-lightbox';
import paralaxBackground from './components/paralax';
import { handleHideNavBar, handleHamburgerClick, handleResize } from './components/handleNavBar';

//html objects

const gallery = document.querySelectorAll('.gallery a');
const hamburger = document.querySelector('.hamburger');
const mainManu = document.querySelector('.mainManu');
const manu = document.querySelector('.manu');
const manuBgListener = document.querySelectorAll('.manu li')



//init after DOM
document.addEventListener('DOMContentLoaded', ()=> {

    // initCookies();

    //handle gallery
    gallery.forEach(img=> new Luminous(img));

    //handle hamburger namiation and show manu
    hamburger.addEventListener('click', ()=> handleHamburgerClick(manu, hamburger));
    manuBgListener.forEach(item => item.addEventListener('click', ()=>handleHamburgerClick(manu , hamburger)));
    document.addEventListener('click', e => smoothScroll(e.target));

    document.addEventListener('scroll', e => {

        paralaxBackground();
        handleHideNavBar(e, mainManu, manu, hamburger);

    });

    window.addEventListener('resize', ()=> {

        paralaxBackground();

        if(window.innerWidth > 1200) {

            handleResize(manu, hamburger);

        };

    });

});