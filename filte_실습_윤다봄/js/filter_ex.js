$(function(){//빈방(배열)에 img를 집어넣어줌

  const $imgs = $('#converse img');
  const $search = $('#filter-search');
  const cache = [];

  $imgs.each(function(){//imgs를 빈방에 집어넣음
    cache.push({
      element: this,
      text: this.alt.trim().toLowerCase()
    });//선택한 alt의 양쪽 공백 없애고 소문자로 바꿈
  });

  
  function filter(){
    const query = this.value.trim().toLowerCase();
    cache.forEach(function(img){ //배열반복문
      let index = 0;
      if (query){
        index = img.text.indexOf(query); //query 값을 찾아라
      } 
        img.element.style.display = index === -1 ? 'none' : '' ;
    });
  }
  $search.on('keyup', filter);


  /* const num1=2; 
     const num2='2';
      */

});