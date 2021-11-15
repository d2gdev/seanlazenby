$('.navbar-toggle').on('click',function(){
    $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
});
$('.close-menu, .click-capture, .menu-list li a').on('click', function(){
    $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
    $('.menu-list ul').slideUp(300);
});

$('.menu-list li a').on('click', function(){
    $('.menu-list li').removeClass('active');
    $(this).closest('li').addClass('active');
});

$('.col-resume').on('mouseover',function(){
    $('.section-bg.mask').addClass('hide');
});

$('.col-resume').on('mouseleave', function () {
    $('.section-bg.mask').removeClass('hide');
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
event.preventDefault();
$(this).ekkoLightbox();
});