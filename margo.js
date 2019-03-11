//меню
$('.menu__open').click(function () {
    $(".item__header").slideToggle(700);
    $(".item__header").css({
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(228,156,210,0.8)'
    });
});


$(window).resize(function () {
    if ($(window).width() > 670) {
        $('.item__header').removeAttr('style');
    }
});

//вверх
var $btnTop = $('.btn-top');
$(window).on("scroll", function () {
    if ($(window).scrollTop() >= 20) {
        $btnTop.fadeIn();
    } else {
        $btnTop.fadeOut();
    }
});

$btnTop.on("click", function () {
    $('html, body').animate({ scrollTop: 0 }, 900);
});

//ссылки
$('.content__header').click(function (event) {
    var id_clicked_element = $(this).attr('href');
    var destination = $(id_clicked_element).offset().top;
    $('html, body').animate({ scrollTop: destination }, 1000);
    return false;
});

//слайдер
$('.next').click(function () {
    var firstImg = $('.first');
    var firstImgIndex = $('.first').index();
    var nextImageIndex = firstImgIndex + 1;
    var nextImage = $('.img').eq(nextImageIndex);
    
    firstImg.fadeOut(400, function () {
        firstImg.removeClass('first');
        if (nextImageIndex == ($('.img:last').index() + 1)) {
            $('.img').eq(0).fadeIn(400);
            $('.img').eq(0).addClass('first');
        } else {
            nextImage.fadeIn(400);
            nextImage.addClass('first');
        } 
    });
});

$('.prev').click(function () {
    var firstImg = $('.first');
    var firstImgIndex = $('.first').index();
    var prevImageIndex = firstImgIndex - 1;
    var prevImage = $('.img').eq(prevImageIndex);

    firstImg.fadeOut(400, function () {
        firstImg.removeClass('first');
        prevImage.fadeIn(400);
        prevImage.addClass('first'); 
    });
});


//табы
var $wrapper = $('.tab-wrapper'),
    $allTabs = $wrapper.find('.tab-content > div'),
    $tabMenu = $wrapper.find('.tab-menu li'),
    $line = $('<div class="line"></div>').appendTo($tabMenu);

$allTabs.not(':first-of-type').hide();
$tabMenu.filter(':first-of-type').find(':first').width('100%');

$tabMenu.each(function (i) {
    $(this).attr('data-tab', 'tab' + i);
});

$allTabs.each(function (i) {
    $(this).attr('data-tab', 'tab' + i);
});

$tabMenu.on('click', function () {

    var dataTab = $(this).data('tab'),
        $getWrapper = $(this).closest($wrapper);

    $getWrapper.find($tabMenu).removeClass('active');
    $(this).addClass('active');

    $getWrapper.find('.line').width(0);
    $(this).find($line).animate({ 'width': '100%' }, 'fast');
    $getWrapper.find($allTabs).hide();
    $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
});
