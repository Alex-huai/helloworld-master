$(function() {
    var windowH = $(window).height();
    var bannerH = $('#banner').height();
    if (windowH > bannerH) {
        $('#banner').css({ 'height': ($(window).height() - 50) + 'px' });
        $('#bannertext').css({ 'height': ($(window).height() - 50) + 'px' });
    }
    $(window).resize(function() {
        var windowH = $(window).height();
        var bannerH = $('#banner').height();
        var differenceH = windowH - bannerH;
        var newH = bannerH + differenceH;
        var truecontentH = $('#bannertext').height();
        if (windowH < truecontentH) {
            $('#banner').css({ 'height': (newH - 50) + 'px' });
            $('#bannertext').css({ 'height': (newH - 50) + 'px' });
        }
        if (windowH > truecontentH) {
            $('#banner').css({ 'height': (newH - 50) + 'px' });
            $('#bannertext').css({ 'height': (newH - 50) + 'px' });
        }

    })
});
/*导航栏固定*/ 
$(window).load(function() {
    $("#menu").sticky({ topSpacing: 0 });
});
/*页面跳转*/
$(document).ready(function() {
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");
        $('a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash;
        var $target = $(target);
        var targetOffset = $target.offset().top;
        $('html, body').stop().animate({
            'scrollTop': targetOffset
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('.nav li a').each(function() {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        var refELMptp = refElement.position().top;
        if (refELMptp <= scrollPosition && refELMptp + refElement.height() > scrollPosition) {
            $('.nav li a').removeClass("active");
            currentLink.addClass("active");
        } else {
            currentLink.removeClass("active");
        }
    });
};

/*底部环状菜单*/ 
$( function(ev) {
        var toggle = $('#circle-toggle');
        var menu = $('#circle-menu');
        var rot;
        $('#circle-toggle').on('click', function(ev) {
            rot = parseInt($(this).data('rot')) - 180;
            menu.css('transform', 'rotate(' + rot + 'deg)');
            menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
            if (rot / 180 % 2 == 0) {
                toggle.parent().addClass('circle-active');
                toggle.addClass('close');
            } else {
                toggle.parent().removeClass('circle-active');
                toggle.removeClass('close');
            }
            $(this).data('rot', rot);
        });
        menu.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
            if (rot / 180 % 2 == 0) {
                $('#circle-menu div i').addClass('circle-animate');
            } else {
                $('#circle-menu div i').removeClass('circle-animate');
            }
        });
    });
