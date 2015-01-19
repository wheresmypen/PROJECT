$(function(){

    /*
    *
    * Get different buttons to function for the same backside route
    * which grabs an email-id'ed database object and adds daily schedule
    * information (as flags in the database object that contains an array)
    *
    * */


    var returnedFlag;

    $('#submitUsher').on('click', function(){
        returnedFlag = grabUsher();
        console.log(returnedFlag);
    });

    function grabUsher(){
        var email_flag = $('#email_login').val();
        console.log(email_flag);
        $.ajax({
            type: "POST",
            url: '/fullSchedule',
            data: {"email": email_flag},
            success: function(returnedFlag){
                console.log(returnedFlag);
                compileUsher(returnedFlag);
                /*window.location.href = 'http://localhost:3000/'*/
            }



        });

        $('#concert3').on('click', function(){
            console.log('third');
        });

        return email_flag;


    };

    function compileUsher(returnedFlag){

        console.log(returnedFlag);

//        if returnedFlag is not empty (need to pass whole object)
//        then run some options with the button clicked BUTTON 1 eg.
//        which are not available without the confirmation email added
//
//        if returnedFlag is empty then the buttons remain disabled or
//        redirect to the log-in screen (later the log-in screen will actually
//        pass the session cookie to the page and tell if the person is logged-in

        if (returnedFlag.email) {
            console.log(returnedFlag);
            console.log('+++++');
//            newday(dummy);
//            res.send({email: 'goober'});

            $.ajax({
                type: "POST",
                url: '/submit_form',
                data: returnedFlag,
                success: function(e){
                    console.log(e);
                }



            });
        }

        else {
            console.log("does not exist");
            console.log(returnedFlag);
        }



    }

//  BUTTON 1

    $('#concert1').on('click', function(){
      console.log(returnedFlag);

        $.ajax({
            type: "POST",
            url: '/selectEvent',
            data: {"show": 1, "email": "something"},
            success: function(garbage){
                console.log("garbage========");

            }
        });

    });

//    BUTTON 2

    $('#concert2').on('click', function(){
        console.log('first');

        $.ajax({
            type: "POST",
            url: '/selectEvent',
            data: {"email": "something"},
            success: function(garbage){
                console.log(garbage+"========");

             }
        });

    });



})