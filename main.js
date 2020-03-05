var main = document.querySelector('.main');
var nav = document.querySelector('.nav');


window.onscroll = function () {

    if (window.pageYOffset > (main.offsetHeight - nav.offsetHeight)) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    } else {
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');

    }
}

var profileImg = document.getElementById("daph-gif");
setTimeout(function(){ profileImg.src = "images/daph-profile.jpg" }, 3000);


profileImg.onclick = function(){
    profileImg.src = "images/daph-profile.gif" 
    setTimeout(function(){ profileImg.src = "images/daph-profile.jpg" }, 3000); 
};
