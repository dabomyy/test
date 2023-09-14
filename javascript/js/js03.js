const coverImage=document.querySelector("#cover");

coverImage.onclick=() => {
  alert("눌렀습니다");
}

coverImage.onmouseover=() => {
  coverImage.style.border="5px red solid";
}
coverImage.onmouseout=() => {
  coverImage.style.border="";
}


//coverImage.onclick=function(){
//  alert("눌렀습니다");
//}

//coverImage.onmouseover=function(){
//  coverImage.style.border="5px solid red";
//}

////coverImage.onmouseout=function(){
//  coverImage.style.border="";
//}