$(function() {


    $('#button-2').click(function(){
        $('#mainContent').slideDown(makereal);
    });



    function makereal(){
        $(document.body).on('click', '#submitClear', unreal);
    };


    function unreal(){

        var values = $('#usherInfo').serialize();
        console.log(values);

        $.ajax({
            type: "POST",
            url: '/submit_form',
            data: {"values": values}
        });

        console.log("mweh-he-he");
    };


});