function favorite(e) {
  e.classList.toggle("favorite");
}

function withShadow(e, id) {
  e.classList.toggle("bg-shad");
  var element = document.getElementById(id);
  element.classList.toggle("display-check");
}
function withCross(id) {
  var element = document.getElementById(id);
  element.classList.toggle("display-cross");
}

function removeCard(id) {
  var element = document.getElementById(id);
  element.remove();
}

// var imgCard=document.getElementById("img1");
// function clickRead(){
//   if(imgCard)
//   document.getElementById("icon-A1").style.visibility = "visible";
// }

//  var image = document.getElementById('heart1');

//  function changeImage() {

//             if (image.src.match("icon/active")) {
//                 image.src = "icon/fav.png";
//             }
//             else {
//                 image.src = "icon/active.png";
//             }

//         }
//  var heart2 = document.getElementById('heart2');
//  function changeImage2() {
//         if (heart2.src.match("icon/active")) {
//                 heart2.src = "icon/fav.png";
//             }
//             else {
//                 heart2.src = "icon/active.png";
//             }
//         }
// function changeImage(image) {
//   if(image.src=="icon/active.png"){
//     image.src = "icon/active.png"
//   }else{
//     image.src="icon/fav.png"
//   }

// }
// var image = document.querySelector("#heart-like");
//         function changeImage(image) {

//             if (image.src=="icon/active.png") {
//                 image.src = "icon/fav.png";
//             } else {
//                 image.src = "icon/active.png";
//             }
//         }

// var image=document.querySelectorAll("heart-like");
// var activeHeart=document.getElementById("heart-like");
// activeHeart.src = "icon/active.png";
// // var favHeart=document.getElementById("heart-like").src == "icon/fav.png";

// function changeImage(){
//     if(image==activeHeart){
//         image.src="icon/fav.png";
//     }else{
//         image.src = "icon/active.png";
//     }
// }

// const likebutton=document.querySelectorAll('heart-like').classList.toggle("blue");

// for(var i = 0; i < likebutton.length; i++){
//     likebutton[i].addEventListener('click', function () {

//     }) }
// const likebutton=document.querySelectorAll('heart-like');
// var activeHeart=document.getElementById("heart-like").src == "icon/active.png";
// var favHeart=   document.getElementById("heart-like").src = "icon/fav.png";

//  if(activeHeart==true){
// favHeart;
//  }else{

//  }

// function changeImage() {
//     if (document.getElementById("heart-like").src == "icon/active.png"){
//         document.getElementById("heart-like").src = "icon/active.png";
//     } else {
//         document.getElementById("heart-like").src = "icon/fav.png";
//     }
// }

//  closeBtn.addEventListener("click", ()=>{
//     sidebar.classList.toggle("open");
//     menuBtnChange();//calling the function(optional)
//   });

//   searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
//     sidebar.classList.toggle("open");
//     menuBtnChange(); //calling the function(optional)
//   });

// following are the code to change sidebar button(optional)
//   function menuBtnChange() {
//    if(sidebar.classList.contains("open")){
//      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
//    }else {
//      closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
//    }
// }
