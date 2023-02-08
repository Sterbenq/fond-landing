$('.current_lang').click(function(){
    $('.langs_list').toggle()
})

$(document).scroll(function(){
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 20)
    {
        $('.menu_top').slideUp(300)
        $('.menu_bot').css('margin-top','10px')
    }else{
        $('.menu_top').slideDown(300)
        $('.menu_bot').css('margin-top','0')
    }
})

function scrollToElement(elem){
    let scrollDiv = document.querySelector(`.${elem}`).offsetTop;
    window.scrollTo({ top: scrollDiv - 85, behavior: 'smooth'});
}
function scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth'});
}

var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    zoom: true,
    slidesPerView: 3,
    lazy: true,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

$('.go_logo').click(function(){
    $('.gofund').toggleClass('go_opened')
})
$('.hamburger-lines').click(function(){
    $(this).toggleClass('mobile_open')
    $('.mobile_content').toggleClass('cont_open')
})