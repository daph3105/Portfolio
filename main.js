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

const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")

let images = [img1,img2,img3,img4]

function checkSlide (e){
    let number = 2;
    images.forEach(image =>{
    //half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - image.height/number;
    //bottom of the image
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast){
        image.classList.add('active')
    }
    else{
        image.classList.remove('active')
    }
    number-=0.7;
    })


}

window.addEventListener('scroll', debounce(checkSlide))
