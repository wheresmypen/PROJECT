$(function() {


    console.log('reload');

    $('#button-login').click(function(e){
        e.preventDefault();

        var input_flag = $('#user_email').val();
        //// OK
        ////

        /*NOW YOU HAVE THE FORM SUBMISSION FOR THE LOG-IN
        * BUT YOU ALSO NEED TO SET UP AN AJAX ROUTE TO CHECK AGAINST THE DATABASE*/


        $.ajax({
            type: "POST",
            url: '/check_login',
            data: {"email": input_flag},
            success: function(returnedFlag){
                console.log(returnedFlag+"========");
                /*window.location.href = 'http://localhost:3000/'*/
            }
        });

        $('#mainContent').slideDown();
        console.log('form is here');
    });



    $(document.body).on('click', '#submitInfo', unreal);

    function unreal(){

        var email = $('#email').val()
//         ,  toggleContact = $('#toggleContact')
            ,  lastname = $('#lastname').val()
            ,  firstname = $('#firstname').val()
//         ,  outtaTown = $('#outtaTown').val()
            ,  streetAddress = $('#streetAddress').val()
            ,  cityAddress = $('#cityAddress').val()
            ,  zipAddress = $('#zipAddress').val()
            ,  cellNo = $('#cellNo').val()
            ,  altPhone = $('#altPhone').val()
            ,  contactMethod = $('#contactMethod').val();


        console.log(email);

        $.ajax({
            type: "POST",
            url: '/submit_form',
            data: {"email": email
//              ,    "toggleContact": toggleContact
                ,    "lastname": lastname
                ,    "firstname": firstname
//              ,    "outtaTown": outtaTown
                ,    "streetAddress": streetAddress
                ,    "cityAddress": cityAddress
                ,    "zipAddress": zipAddress
                ,    "contactMethod": contactMethod
                ,    "cellNo": cellNo
                ,    "altPhone": altPhone},
            success: function(returnedFlag){
                window.location.href = 'http://localhost:3000/'
            }
        });


        console.log("mweh-he-he");


    };
    console.log('blue');


});