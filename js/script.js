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


    var screen = window.pageYOffset || document.documentElement.scrollTop;
    const golovna = 0;
    const about = $(".about_sec").offset().top;
    const project = $(".project_sec").offset().top;
    const help = $(".help_sec").offset().top;
    console.log(screen)
    console.log(about)
    if(screen == golovna ){
        $('.link_el').removeClass('link_active')
        $('.step_1').addClass('link_active')
    }else     if(screen >= about - 100 && screen < about + 350){
        $('.link_el').removeClass('link_active')
        $('.step_2').addClass('link_active')
    }else     if(screen >= project - 100 && screen < project + 350){
        $('.link_el').removeClass('link_active')
        $('.step_3').addClass('link_active')
    }else     if(screen >= help - 100 && screen < help + 350){
        $('.link_el').removeClass('link_active')
        $('.step_4').addClass('link_active')
    }


})

function scrollToElement(elem){
    if(window.innerWidth < 900)
    {
        let scrollDiv = document.querySelector(`.${elem}`).offsetTop;
        window.scrollTo({ top: scrollDiv + 600, behavior: 'smooth'});
        $('.hamburger-lines').toggleClass('mobile_open')
        $('.mobile_content').toggleClass('cont_open') 
    }else{
        let scrollDiv = document.querySelector(`.${elem}`).offsetTop;
        window.scrollTo({ top: scrollDiv - 85, behavior: 'smooth'});
    }
}
function scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth'});
    if(window.innerWidth < 900)
    {
        $('.hamburger-lines').toggleClass('mobile_open')
        $('.mobile_content').toggleClass('cont_open') 
    }
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


