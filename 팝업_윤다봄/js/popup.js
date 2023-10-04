$(function(){
  
  if($.cookie("pop") !="no") $(".pop_wrap").show();
  $(".pop_wrap").css("cursor","move").draggable();
  $(".pop_wrap area:eq(0)").on("click",function(){
    $(".pop_wrap").fadeOut("fast");
  }); //eq(0)=창닫기
  
  $(".pop_wrap area:eq(1)").on("click",function(){
    $.cookie ("pop","no",{expires:1}); //클릭시 쿠키 value값을 no로 세팅
    $(".pop_wrap").fadeOut("fast");
  }); //eq(1)=하루동안 창닫기
});