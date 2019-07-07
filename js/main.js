$( document ).ready(function() {
    $("#header__bottom--input").click(function() {
        if($(this).is(':checked')) {
            $(".banner").css('margin-top', 25.5 + 'rem');
        } else {
            $(".banner").css('margin-top', 10 + 'rem');
        }
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 40) {
            $("#toTopBtn").fadeIn();
        } else {
            $("#toTopBtn").fadeOut();
        }
    });

    $("#toTopBtn").click(function() {
        $('html , body').animate({scrollTop: 0}, 800, );
    });


    $("#login").click(function() {
        $(".modal").show();
    })

    //Close modal

    $(window).click(function(e) {
        if(e.target.className === "modal" || e.target.id === "signInButton") {
            $(".modal").hide();
        }
    })

    $('.slider').slick({
    });
});

