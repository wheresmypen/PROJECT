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
                compileUsher();
                /*window.location.href = 'http://localhost:3000/'*/
            }

        });
        return email_flag;
    };

    function compileUsher(){

        if (returnedFlag === "d.james.obrien@gmail.com")

        console.log("other options");

    }


    $('#concert1').on('click', function(){
      console.log('first');

        $.ajax({
            type: "POST",
            url: '/selectEvent',
            data: {"show": 1, "email": "something"},
            success: function(garbage){
                console.log("garbage========");
                /*window.location.href = 'http://localhost:3000/'*/
            }
        });

    });

    $('#concert2').on('click', function(){
        console.log('first');

        $.ajax({
            type: "POST",
            url: '/selectEvent',
            data: {"email": "something"},
            success: function(garbage){
                console.log(garbage+"========");
                /*window.location.href = 'http://localhost:3000/'*/
            }
        });

    });


    $('#concert3').on('click', function(){
        console.log('third');
    });


})