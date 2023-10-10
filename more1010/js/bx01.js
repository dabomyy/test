$(function(){

  if ($("#banner_wrap").length > 0){
     bxSlider = $("#slide_banner").bxSlider(); //이미지들의 바로 직계
  }

  function bxInit(){
    winSize = $(window).width();
    let sizeID;

      if (winSize < 1500 && winSize >= 800){
        sizeID = 4;
      }else if (winSize < 800 && winSize >= 600){
        sizeID = 3;
      }else if (winSize < 600 && winSize >= 400){
        sizeID = 2;
      }else if (winSize < 400){
        sizeID = 1;
      }else {
        sizeID = 5; //1501~
      }

      bxSlider.reloadSlider({
        minSlides: sizeID,
        maxSlides: sizeID,
        moveSlides: sizeID,
        auto: true,
        slideWidth: 257,
        slideMargin: 5,
        pause: 2500,
        nextText:"",
        prevText:"",
        autoHover: true,
        autoStart: true,
        autoDelay: 750,
        pager: false
      });
  }

  bxInit();
  $(window).on("resize",function(){
    bxSlider.stopAuto(true);
    bxInit();
    bxSlider.onSliderLoad(function(){
      this.autoDelay(750).autoStart(true);
    });
  });

  $("#prevBtn").on("click",function(){
    bxSlider.goToPrevSlide();
    return false;
  });

  $("#nextBtn").on("click",function(){
    bxSlider.goToNextSlide();
    return false;
  });

});