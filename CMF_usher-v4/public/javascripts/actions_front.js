$(function(){

var person = sessionStorage.getItem('login');

if (sessionStorage.getItem("login")){

    $('#exitUser').on('click', function() {
    });

    // HERE are the navigation buttons within the body

    $('#optionsProfile').on('click', function() {
        window.location.href = 'http://localhost:3000/optionsProfile';
    });

    $('#fullSchedule').on('click', function() {
        window.location.href = 'http://localhost:3000/fullSchedule';
    });

    $('#startPage').on('click', function() {
        window.location.href = 'http://localhost:3000/startPage';
    });

    $('#siteMap').on('click', function(){
       window.location.href = 'http://localhost:3000/siteMap';
    });

}

else {

    window.location.href = 'http://localhost:3000/startPage';

}

});