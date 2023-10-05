$(function(){

const perNum = 80; //게이지 수치
$(".wp2").waypoint(function(){
  $(".wp2").addClass("animated fadeIn");
  $(".second.circle").circleProgress({
    value: perNum/100,
    startAngle: 300,
    size: 300,
    fill: {color:["lightblue"]},
    animation: {duration: 1500, easing: "swing"},
    lineCap: "round",
    reverse: true
  }).on("circle-animation-progress", function(event, progress){
    $(this).find("strong").html(Math.round(perNum * progress)+"<i>%</i>");
  });//<i>: %를 표현하는 공식

  },{
    offset: "75%" //waypoint : 스크롤 내리다 나오기 때문에 쓰임
                  //처음부터 나올 때는 wp 안 써도 됨
    });
});