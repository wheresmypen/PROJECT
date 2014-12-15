$(function() {


    $('#button-login').click(function(){
        $('#mainContent').slideDown();
        console.log('form is here');
    });



    function makereal(){
        $(document.body).on('click', '#submitClear', unreal);
    };

    makereal();

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
                ,    "altPhone": altPhone}
        });


        console.log("mweh-he-he");


    };




});