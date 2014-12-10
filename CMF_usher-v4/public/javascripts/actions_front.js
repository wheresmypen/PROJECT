// This log-out function is disabled, but ought to toggle to global id object
// It will be available on every page in the basic layout

$('#exitUser').on('click', function() {
    console.log('button works');
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
