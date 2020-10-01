import '.././sass/index.scss';
import initCookies, { handlePrivacyModal } from './components/cookies';
import isSafari from './components/isSafari';
import smoothScroll from './components/smoothScroll';
import { Luminous } from 'luminous-lightbox';
import paralaxBackground from './components/paralax';
import { handleHideNavBar, handleHamburgerClick, handleResize } from './components/handleNavBar';

//html objects

const gallery = document.querySelectorAll('.gallery a');
const hamburger = document.querySelector('.hamburger');
const mainManu = document.querySelector('.mainManu');
const manu = document.querySelector('.manu');


//init after DOM
document.addEventListener('DOMContentLoaded', ()=> {

    initCookies();

    //check if userAgent is Safari to set proper display props
    isSafari();

    //handle gallery
    gallery.forEach(img=> new Luminous(img));

    document.addEventListener('click', e => {
        if(e.target.dataset.target) smoothScroll(e.target);
        if(
            e.target.classList.contains('hamburger') || 
            e.target.parentNode.classList.contains('hamburger')) 
            handleHamburgerClick(manu, hamburger);

        if(
            e.target.classList.contains('manu__item') && 
            window.innerWidth < 1200 ) 
            handleHamburgerClick(manu , hamburger);

        if(e.target.classList.contains('closeBtn') ||
            e.target.classList.contains('footer__cookies-link') ||
            e.target.classList.contains('cookies__button--more')) 
            handlePrivacyModal();
    }, true);

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