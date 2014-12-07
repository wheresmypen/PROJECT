$(function() {


    $('#button-2').click(function(){
        $('#mainContent').slideDown(makereal);
    });



    function makereal(){
        $(document.body).on('click', '#submitClear', unreal);
    };


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


//        console.log(values);

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