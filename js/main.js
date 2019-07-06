$( document ).ready(function() {
    $("#header__bottom--input").click(function() {
        if($(this).is(':checked')) {
            $(".banner").css('margin-top', 25.5 + 'rem');
        } else {
            $(".banner").css('margin-top', 10 + 'rem');
        }
    });
    $("#toTopBtn").click(function() {
        $('html , body').animate({scrollTop: 0}, 800, );
    })
});