$(function(){

  const tagged = {};
  $('#converse img').each(function(){
    const img = this;
    const tags = $(this).data('tags'); 

    if (tags){
      tags.split(',').forEach(function(tagName){
        if (tagged[tagName] == null){
              tagged[tagName] = [];
        }
                tagged[tagName].push(img);
      });
    }
  });

  $('.first a').on('click',function(){
    $('#button li').removeClass('active');
      $(this).addClass('active')
      $('#converse img').show();
      return false;
  });

  $.each(tagged, function(tagName){
    $('#button li').on('click', function(){
      $('.first a').removeClass('active');
        const aa = $(this).text();

        $(this).addClass('active').siblings().removeClass('active');
      $('#converse img').hide().filter(tagged[aa]).show();
    });
  });
});