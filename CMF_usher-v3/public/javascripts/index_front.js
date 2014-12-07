$(function(){



    $(".form-horizontal").submit(function(e){
//        PREVENTS THE DOCUMENT REDIRECT TO USER_FORM
        e.preventDefault();

        console.log($('#user_email').val()+"/////");

        return $.ajax({
//            makes an ajax request that will pass the email address value to form.js backend for a database search
            url: "/form",
            data: {user_email: $('#user_email').val()},
            contentType: "application/json; charset=utf-8",
            dataType: "json",


//            gets the object returned from the form.js search
            success: function(getback) {

                console.log('retrieved');

                if (getback == '{firstname: "false return"}'){
                    console.log(getback);
                    window.location.href = '/user_form';
                }

                else {
                    function dropPage() {

                        console.log('functionWORKING');

                        //                    SAME
                        // Declare all the variables.
                        var exampleValues = {},
                            parsedTemplate = "",

                        // Get the template from the script block.
                        //                  THIS IS THE DROP-DOWN 'FORM' THAT IS INCLUDED IN INDEX.HTML


                            templateText = $('#formTemplate').html(),
                        // Then we use Underscore's template function to compile it
                        // into a stand alone function that we can feed values to and
                        // get HTML output.

                        //         NOT QUITE SURE HOW THIS WORKS, BUT SEEMS STRAIGHTFORWARD... MAKES THE FORM A FUNCTIONALLY DYNAMIC TEMPLATE
                            demoTemplate = _.template(templateText);
                        //                    ????????????????????????
                        // Here, we grab the data, and put the results into exampleValues.
                        // I'm using .ajax instead of .getJSON so I can set 'async: false'
                        // for the demo; in production you'd be checking for async calls
                        // to return, but I wanted to keep the script simple.
                        //                    ????????????????????????

                        //  THIS IS THE AJAX CALL THAT WE ARE REMOVING TO REPLACE WITH THE ABOVE AJAX REQUEST
                        //  IT HAS YET TO BE DETERMINED IF THE CALL IS BETTER ABOVE OR HERE WITH THESE PARAMS
                        //            $.ajax({url: "data/profiledata.json", async: false, dataType: "json", success: function(json) {exampleValues = json;}});


                        // Finally, we call the demoTemplate function we created earlier,
                        // passing in the data we just retrieved, and then put the
                        // resulting HTML into the empty div.
                        parsedTemplate = demoTemplate(getback);
                        /*THIS TAKES OUR FORM HTML AND POPULATES IT WITH THE RETURNED OBJECT DATA*/
                        $("#formContent").html(parsedTemplate);
                        /*THE RESULTING HTML DOCUMENT IS RENDERED AT THE ID TAG*/
                    }


                    $('#formContent').slideDown();

                    dropPage();
                  }

                },

            error: function (jqXHR, textStatus, errorThrown){
                console.log('status: ', textStatus);
                console.log('error: ', errorThrown);

            }

        });


    });




});