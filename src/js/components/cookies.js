const initCookies = ()=> {

    const cookiesMsg = document.querySelector('.cookies');

    const createCookie = (name, value, days)=> {

         let date = new Date();
         date.setTime(date.getTime() + (days*24*60*60*1000));
         let expires = "; expires=" + date.toGMTString();
         document.cookie = name+"="+value+expires+"; path=/";

     };

     const readCookie = (name)=> {

         let nameEQ = name + "=";
         let ca = document.cookie.split(';');

         for(let i=0; i < ca.length; i++) {

             var c = ca[i];

             while (c.charAt(0) == ' ') c = c.substring(1, c.length);
             if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);

         };

         return null;

     };
 
     const closeCookiesWindow = ()=> {

         createCookie('cookies_accepted', 'youreDomainName', 365);
         cookiesMsg.classList.remove('cookies--active');
         cookiesMsg.classList.add('cookies--noActive');


     };
     
     const checkCookies = ()=> {

        if (readCookie('cookies_accepted') != 'youreDomainName') {

            cookiesMsg.classList.add('cookies--active');
            document.querySelector('.cookie__button--accept').addEventListener('click', ()=>closeCookiesWindow());

        };

     };
     
     const init = ()=> {

         checkCookies();

     };
     
     return init();
 };

 const handlePrivacyModal = ()=> {
    const modal = document.querySelector('.privacy-modal');

    if(!modal.classList.contains('privacy-modal--active')) {
        modal.classList.add('privacy-modal--active');
        modal.classList.remove('privacy-modal--noActive');
    }else {
        modal.classList.remove('privacy-modal--active');
        modal.classList.add('privacy-modal--noActive');
    }

    
 };

 export {
     handlePrivacyModal
 }

 export default initCookies;