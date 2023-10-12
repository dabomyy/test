$(function(){
 $('.filterList').hide();
 $('.filter>p>a.filterLink').on('click',function(e){
  e.preventDefault();
  if($(this).parent().next().is(':visible')){
    $(this).parent().next().stop().hide();
    $(this).find('img').css({transform:'none'});
  }else{
    $(this).parent().next().stop().show();
    $(this).find('img').css({transform:'rotate(180deg)'}); //화살표 방향 아래로 바뀜
  }
 });
 $('.filter ul li').on('click',function(){
  $('.filter ul li').removeClass('on');
  $(this).addClass('on');
  $('.filterList').stop().slideUp();
  $('.filter>p>a.filterLink').find('img').css({transform: 'none'});
  //filterLink의 하위요소인 img의 css를 

  const btnName = $(this).text(); //text의 글자가 btnName에 저장됨 (aaa,bbb ...)
  $('ul#cont li').each(function(){
    const imgAlt = $(this).find('img').attr('data-list'); 
    //선택한 개체의 하위요소인 img의 data-list 가져와라

    if (btnName == '*ALL'){ //*ALL이면 ul#cont li 를 다 보여라
      $('ul#cont li').fadeIn(); //fadeIn: 천천히 불러오기
    }else if(btnName == imgAlt){
      $(this).fadeIn();
    }else{
      $(this).fadeOut();
    }
  });
 });
});