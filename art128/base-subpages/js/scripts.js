document.addEventListener("DOMContentLoaded", function  (){
//console.log("javascript is ready");


// TOGGLE NAV MOBILE MENU
const menubutton = document.querySelector(".menu-button");
const menunav = document.querySelector(".toggle-nav");
menubutton.onclick = function () {
       if (menunav.getAttribute("data-navstate") === "open") {
           //if true do this
           menunav.setAttribute("data-navstate", "closed");
       } else {
           //else do this
            menunav.setAttribute("data-navstate", "open");
        }
    };
});