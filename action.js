var btn = document.querySelector(".btn");
var menu = document.querySelector(".nev_menu");
var head = document.querySelector("wreaper")
btn.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("menu_active");
    //head.removeClass("remove");
});


window.addEventListener("scroll", function () {

})

setInterval(calcPrice, 1000);
function calcPrice() {

    var bigImage1 = document.getElementById("img1");
    var bigImage2 = document.getElementById("img2");
    const big1 = bigImage1.getAttribute("src");
    bigImage1.setAttribute('src', bigImage2.getAttribute("src"));
    bigImage2.setAttribute('src', big1);
    //<img src="assets/img/LOGO.png">
}