$(function(){
  
  const defaultTop=parseInt($("#quick_menu").css("top"));
  $(window).on("scroll",function(){
    const scv=$(window).scrollTop(); 
    $("#quick_menu").stop().animate({top:scv+defaultTop+"px"},500);
  }); //scv변수에 scrollTop(스크롤한 거리) 탑값 저장

  

  $("#quick_menu ul a").click(function(e){
    $.scrollTo(this.hash || 0,1500);
    e.preventDefault();
  });
});

$(function(){
  
  const defaultTop=parseInt($("#star").css("top"));
  $(window).on("scroll",function(){
    const scv=$(window).scrollTop(); 
    $("#star").stop().animate({top:scv+defaultTop+"px"},500);
  }); //scv변수에 scrollTop(스크롤한 거리) 탑값 저장

  $("#star h3 img").click(function(e){
    $.scrollTo(this.hash || 0,1500);
    e.preventDefault();
  });
});
