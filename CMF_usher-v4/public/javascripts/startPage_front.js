$(function() {

    var returnedFlag="";


    $('#button-login').click(function(e) {
        e.preventDefault();

        var input_flag = $('#user_email').val();


//        YOU ALSO NEED TO SET UP AN AJAX ROUTE TO CHECK AGAINST THE DATABASE

//          THIS LOGIN CREATES A ROUTE TO CHECKLOGIN.JS WHICH COMPARES AGAINST THE DATABASE
//        BUT CHECKLOGIN =ALSO= NEEDS TO PUT THE CONFIRMED ADDRESS INTO LOCAL STORAGE AS A FORM OF LOGGING IN

        function check(e) {
            $.ajax({
                type: "POST",
                url: '/check_login',
                //            SEND AN EMAIL AS A FLAG TO CHECK AGAINST USHER DATABASE
                data: {"email": input_flag},
                //            RETURNED IS EITHER THE USHER OBJECT OR AN EMPTY STRING
                success: function (returnedFlag) {
                    console.log("111-" + returnedFlag + "-111");
//                      IF AN EMPTY STRING IS RETURNED THEN THE LOG-IN MENU DROPS
                    if (returnedFlag.length === 0){
                        console.log("help");
                        $('#mainContent').slideDown();
                    }

                    else {
                        console.log("redirect!");
                    }

                }


            });


        };

        check();

    });




    $(document.body).on('click', '#submitInfo', unreal);

    function unreal(){

        var email = $('#email').val()
            ,  lastname = $('#lastname').val()
            ,  firstname = $('#firstname').val()
            ,  streetAddress = $('#streetAddress').val()
            ,  cityAddress = $('#cityAddress').val()
            ,  zipAddress = $('#zipAddress').val()
            ,  cellNo = $('#cellNo').val()
            ,  altPhone = $('#altPhone').val()
            ,  contactMethod = $('#contactMethod').val();

        $.ajax({
            type: "POST",
            url: '/submit_form',
            data: {"email": email
                ,    "lastname": lastname
                ,    "firstname": firstname
                ,    "streetAddress": streetAddress
                ,    "cityAddress": cityAddress
                ,    "zipAddress": zipAddress
                ,    "contactMethod": contactMethod
                ,    "cellNo": cellNo
                ,    "altPhone": altPhone},
            success: function(returned){
                console.log(returned);
                window.location.href = 'http://localhost:3000/'
            }
        });


        console.log("mweh-he-he");


    };

});