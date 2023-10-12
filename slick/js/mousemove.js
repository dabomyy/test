//커서 따라다니는 요소
const el = document.querySelector('.followAnimation');

//마우스 좌표
let mouseX = 0;
let mouseY = 0;

//커서 따라다니는 요소 좌표
let currentX = 0;
let currentY = 0;

document.body.addEventListener('mousemove',(event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

tick();
function tick(){
  requestAnimationFrame(tick);
  //requestAnimationFrame(callback);
  //callback: 다음 프레임 그리기 등 애니메이션을 업데이트할 때 호출되는 함수
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  el.style.transform = `translate(${currentX}px, ${currentY}px)`;
}