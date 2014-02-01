$(function() {
    // When input loses focus…
    $('#username').focusout(function() {
        // … grab the value
        var val = $(this).val();

        // … send username to the server
        var jsonResponse = $.getJSON(
            "/is_username_valid.json",
            val,
            function(theDataBeingReturned, myGreatStatus, XHRobject) {
                console.log(theDataBeingReturned);
                console.log(myGreatStatus);
                console.log(XHRobject);
                $('.msg').remove();
                if (theDataBeingReturned['valid'] == "1") {
                    // … did the serve say it was a valid username?
                    $('#username').after('<p class="msg">you did it!!!!</p>');
                } else {
                    // … or did the serve say it was taken?
                    $('#username').closest('.form-group').addClass('has-error');
                    $('#username').after('<p class="msg">no good</p>');
                }
            }
        );
    });
});
