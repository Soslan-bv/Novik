$(document).ready(function () {
    $('.header__content-language__text--ru').click(function (event) {
        $('.header__content-language__text--ru').addClass('active')
        $('.header__content-language__text--en').removeClass('active')
    });
    $('.header__content-language__text--en').click(function (event) {
        $('.header__content-language__text--en').addClass('active')
        $('.header__content-language__text--ru').removeClass('active')
    })
    $('.menu-burger').click(function () {
        $('.header__menu,.menu-burger').toggleClass('active')
        $('body').toggleClass('lock')
    })
})
