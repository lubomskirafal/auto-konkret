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

export default paralaxBackground;