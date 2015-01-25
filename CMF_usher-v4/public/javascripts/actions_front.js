$(function(){

var person = sessionStorage.getItem('login');

if (sessionStorage.getItem("login")){

    $("#loggedID").html(person);

    $('#exitUser').on('click', function() {

        $.get( "/../routes/check_login.js", function( data ) {
            $("#loggedIN").html( data );
            console.log( "Load was performed." );
        });

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