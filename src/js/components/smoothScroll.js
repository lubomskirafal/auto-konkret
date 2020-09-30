const smoothScroll = (item)=>{
    
    if(!item.dataset.target) return;

    const target = document.querySelector(item.dataset.target);
    const targetPosition = target.offsetTop;
    const currentPosition = window.pageYOffset;
    const distance = targetPosition - currentPosition;
    let startTime  = null;
    const duration = 500;

    const animate = (currentTime) => { 

        if(startTime === null) startTime = currentTime;
        const progress = currentTime - startTime;
        window.scrollTo(0, distance*(progress/duration)+currentPosition);
        
        if(progress<duration) window.requestAnimationFrame(animate);

    };

    window.requestAnimationFrame(animate);
    
};

export default smoothScroll;