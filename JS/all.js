$(document).ready(function() {
    
    //回到頁首
      $('.top a').click(function(event) {
       event.preventDefault();
       $('html,body').animate({
         scrollTop: 0
       }, 1500);
      });
  
      //下拉選單
      $('.navbar>li>a').click(function(event) {
          event.preventDefault();
          $(this).parent().siblings().find('ul').slideUp();
          $(this).parent().find('ul').slideToggle();
        });
        
      //Banner Swiper
      var swiper = new Swiper(".mySwiper", {
        cssMode: true,
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
   
  });
      
  
    