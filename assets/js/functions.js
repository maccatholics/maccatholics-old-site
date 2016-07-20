$( document ).ready(function() {

    toggle_mobi_nav();
    // handle_parallax_landing();
    index_scrolling();
    exec_scrolling();
    weekly_events_scrolling();
});

function toggle_mobi_nav() {
    $('header button').click(function(){
        var $this = $(this),
            $mobi_nav = $('.mobile-nav');

        $this.toggleClass("is-active");

        if ($this.hasClass("is-active")){
            $mobi_nav.css('left','0');
        } else {
            $mobi_nav.css('left', '-300px');
        }
    });
}

function handle_parallax_landing() {
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        $('.landing-img .img-text').css({
            'transform' : 'translate(0px, ' + wScroll/5 + '%)'
        });
    });
}
function index_scrolling() {
    $('.fab-down').click(function(){
        $('html, body').animate({
            scrollTop: $('.macsa-ribbon').offset().top - 64
        });

    });
}

function exec_scrolling() {
    $('#chaplain-info').fadeIn('fast')

    $('.exec-row .exec-unit .img-container').click(function(){
        var exec_info_id = "#" + this.id + "-info";
        $('.exec-info').hide();
        $(exec_info_id).fadeIn('fast');

        $('html, body').animate({
            scrollTop: $(exec_info_id).offset().top -64
        }, "slow");
    });
}

function weekly_events_scrolling() {
    $('.event-title').click(function(){
        var unit_id = "#" + this.id + "-unit";
        $('html, body').animate({
            scrollTop: $(unit_id).offset().top - 64
        },"slow");

    });
}
