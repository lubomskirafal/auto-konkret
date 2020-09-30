let initialScrollPos = 0;


const handleHideNavBar = (e, manu, manuList, hamburger)=> {
    //hide aond show  main manu on scroll        
    const currentScrollPos = window.scrollY;
    
    if(currentScrollPos> initialScrollPos + 100) {
        
        //hide manu list during scroll
        if(manuList.classList.contains('manu--active')) {
            manuList.classList.remove('manu--active');
            manuList.classList.add('manu--noActive')
        };

        //determ if scrolling down
        manu.style.transform =  'translateY(-200px)';
        initialScrollPos = currentScrollPos;
        manu.classList.remove('manu__list--active');
        hamburger.classList.remove('hamburger--active');

    };

    if(currentScrollPos< initialScrollPos) {
        //determ if scrolling up
        manu.style.transform =  'translateY(0)';
        initialScrollPos = currentScrollPos;

    };

};

const handleHamburgerClick = (manu, hamburger)=> {

    if(!manu.classList.contains('manu--active')) {
        manu.classList.remove('manu--noActive')
        manu.classList.add('manu--active');
        //if manu open click enywere close 
       
    }else {
        manu.classList.add('manu--noActive')
        manu.classList.remove('manu--active');
        
    };

    

    if(!hamburger.classList.contains('hamburger--active')) {
        hamburger.classList.remove('hamburger--noActive')
        hamburger.classList.add('hamburger--active')
    }else {
        hamburger.classList.add('hamburger--noActive')
        hamburger.classList.remove('hamburger--active');
    };
}; 

const handleResize = (manu, hamburger) => {

    //handle manu display on window resize
    manu.classList.remove('manu--active');
    manu.classList.remove('manu--noActive');
    hamburger.classList.remove('hamburger--active');
    hamburger.classList.remove('hamburger--noActive');

};

export {
    handleHideNavBar,
    handleHamburgerClick,
    handleResize
};