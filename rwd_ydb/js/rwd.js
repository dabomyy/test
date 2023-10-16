$(function(){
 
  $(".hm").click(function(){
    $(".menu").animate({marginLeft:"80%"},300);
    $(".cross").stop().show();
  });


  $(".mm> li > a").click(function(){
    if($(this).next().is(":visible"))
    {
      $(this).next().stop().slideUp(500);
      $(this).children("img").attr("src","icon/angle-small-down.png");
    }else{
      $(".sub").stop().slideUp(500);
      $(".mm> li > a").children(500)
      .attr("src","icon/angle-small-down.png");
      $(this).next().stop().slideDown(500);
      $(this).children("img").attr("src","icon/angle-small-down.png");
    };
  });

  $(".cross").click(function(){
    $(".menu").animate({marginLeft:"0"},300);
    $(".cross").stop().hide();
    $(".hm").stop(),show();
  });

  $(".new").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 2, //한 화면에 보여줄 아이템수
    slidesToScroll: 1, //한번에 슬라이드 시킬 아이템수
    reponsive: [
      {
      breakpoint: 1024, //미만 
      settings: {
        slidesToShow: 3,
        slidsToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]  
  });

  $(".best").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 2, //한 화면에 보여줄 아이템수
    slidesToScroll: 1, //한번에 슬라이드 시킬 아이템수
    reponsive: [
      {
      breakpoint: 1024, //미만 
      settings: {
        slidesToShow: 3,
        slidsToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]  
  });

  $(".colors").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 2, //한 화면에 보여줄 아이템수
    slidesToScroll: 1, //한번에 슬라이드 시킬 아이템수
    reponsive: [
      {
      breakpoint: 1024, //미만 
      settings: {
        slidesToShow: 3,
        slidsToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]  
  });


});