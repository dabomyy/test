const header = document.querySelector("#page-header");
function scrollFunc(){
  if (pageYOffset >= 90){
    header.classList.add("sticky");
  }else{
    header.classList.remove("sticky");
  }
}
window.addEventListener("scroll",scrollFunc);
//pageYOffset은 문서가 수직으로 얼마나 스크롤 됐는지 픽셀 단위로 반환
//window scroll 이벤트와 함께 실시간으로 스크롤 진행 여부를 체크하는 용도로 많이 사용