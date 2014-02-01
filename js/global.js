$(function() {
    // When a field gets focus, make the label bold and fieldset 'active'.
    $(".madlibs-form input").focusin(function () {
        $(this).prev("label").addClass('active');
        $(this).closest('fieldset').addClass('active');
    });

    // When a field loses focus, remove active state from label and fieldset.
    $(".madlibs-form input").focusout(function () {
        $(".madlibs-form label").removeClass('active');
        $(".madlibs-form fieldset").removeClass('active');
    });

    // When a div is hovered over, make the input 'active'.
    $(".madlibs-form fieldset div").hover(function () {
        $(this).find("input").toggleClass('active');
    });

    // When text is typed in a field, move it to the slot below
    $(".madlibs-form input[type=text]").blur(function(){
        // Grab the value of the current field
        var val = $(this).val();

        // Grab the ID of the current field
        var blankName = $(this).data("blank");

        // Slot the value into the span whose class matches the field's ID.
        $("." + blankName).text(val).addClass('filled');
    });

    // When field has focus, show tooltip, if there is one.
    $('.madlibs-form input[type=text]').focusin(function(){
        // grab the title of the current input field
        var tooltipContent = $(this).attr('title');

        if (tooltipContent) {
            // create a <p> with that text in it
            var tip = "<p class='tooltip'>" + tooltipContent + "</p>";

            // put that <p> inside the div that surrounds this input
            $(this).after(tip);
        }
    });

    // remove all tooltips when focus is lost on any field
    $('.madlibs-form input[type=text]').focusout(function(){
        $('.tooltip').remove();
    });
});
