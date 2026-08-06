window.onscroll = function () { myFunction() };

var topNav = document.getElementById("navHeader");
var sticky = topNav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        topNav.classList.add("sticky")
    } else {
        topNav.classList.remove("sticky");
    }
}