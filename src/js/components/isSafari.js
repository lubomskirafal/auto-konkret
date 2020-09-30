const isSafari = ()=> {
    //check if userAgent is Safari to set proper display props
    const headerBackground = document.querySelector('.background');
    const isSafari = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    isSafari?headerBackground.style.position = 'absolute': headerBackground.style.position = 'fixed';
};

export default isSafari;