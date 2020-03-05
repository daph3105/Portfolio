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

function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const sliderImages = document.querySelectorAll('.slide-in')

function checkSlide (e){
    console.log(window.scrollY)
sliderImages.forEach(slideImage =>{
    //half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
    //bottom of the image
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast){
        slideImage.classList.add('active')
    }
    else{
        slideImage.classList.remove('active')
    }
})
}

window.addEventListener('scroll', debounce(checkSlide))
