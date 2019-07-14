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

        var sliderUL = $("div.banner__slider--img-box").css('overflow', 'hidden').children('ul'),
        imgs = sliderUL.find('img'),
        imgWidth = imgs[0].width,
        imgLength = imgs.length,
        current = 1;
        totalImagesWidth =  imgLength * imgWidth;

        $('#sliderNav').show().find('button').on('click', function() {
            var direction = $(this).data('dir');
            var loc = imgWidth;
            
            
            //update current value  
            (direction === 'next') ? ++current : --current;

            if (current === 0) {
                current = imgLength;
                direction === 'next';
            }  else if (current - 1 === imgLength) {
                current = 1;
                loc = 0;
            }

            transition(sliderUL, loc, direction);
        });
        function transition (container, loc, direction) {

            var unit;

            if(direction && loc != 0) {
                unit = ( direction === 'next') ? '-=' : '+=';
            }
            container.animate({
                'margin-left': unit ? (unit + loc) : loc
            })
        }
});

