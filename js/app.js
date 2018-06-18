/**
 * Created by Grenia on 19.04.2016.
 */
define([ "jquery", "matchHeight"], function($) {
    $('.box__header').matchHeight();


    var offset = 550,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.scroll-top');
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('scroll-is-visible') : $back_to_top.removeClass('scroll-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('scroll-fade-out');
        }
    });

    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0
            }, scroll_top_duration
        );
    });
});

