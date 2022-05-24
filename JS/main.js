let showMenu = document.getElementById("menu_icon");
let menu = document.querySelector(".menu-content")
let middleSpan = document.querySelector(".menu-icon span:nth-child(2)");
showMenu.onclick = function(){
    menu.style.display = "flex";
    middleSpan.style.width = "100%"
};
let xMark = document.getElementById("close_menu");
xMark.onclick = function(){
    menu.style.display = "none";
    middleSpan.style.width = "66.6%"
}
let nav = document.querySelectorAll("dl dd");
nav.forEach(function (ele) {
    ele.onclick = function(){
        menu.style.display = "none";
        middleSpan.style.width = "66.6%";
    }
})