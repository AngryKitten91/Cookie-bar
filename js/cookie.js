// jQuery DOC ready func
$(document).ready(function() {
   
    // function for creating new cookie
    function createCookie(name, value, time){
        Cookies.set(name, value, { expires: time, path: '' }); 
    }

    //VARIABLES
    var cookieName = 'cookieName', //COOKIE NAME
        cookieValue = '1', //COOKIE VALUE
        cookieTime = 365, //COOKIE LIFE TIME
        cookie = Cookies.get(cookieName); //GET COOKIE VALUE
     
        
    //check for cookie    
    if(cookie === undefined){
        $('.btn-accept').on('click', function(){
            createCookie(cookieName, cookieValue, cookieTime);
            $(this).parent().fadeOut('slow');
        });
    } else if (cookie == '1'){
        $('.cookie-alert').addClass('cookie-hidden');
    }  
});