export const initCookies = ()=> {

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

         createCookie('cookies_accepted', 'T', 365);
         document.querySelector('.cookies-message-container').classList.remove('cookies-message-container--active');

     };
     
     const checkCookies = ()=> {

        if (readCookie('cookies_accepted') != 'T') {

         document.querySelector('.cookies-message-container').classList.add('cookies-message-container--active');
         document.querySelector('#accept-cookies-checkbox').addEventListener('click', ()=>closeCookiesWindow());

         };

     };
     
     const init = ()=> {

         checkCookies();

     };
     
     return init();
 };

 export default initCookies;