// Changes Carousel img based on orientation imediately
let orientationHandler;
(orientationHandler = function () {
	let portrait;
	if (window.innerHeight > window.innerWidth) {
		portrait = true;
	} else {
		portrait = false;
	}
	if (portrait) {
		let imgNL = document.querySelectorAll('.carousel-item > img');
		let imgArray = Array.from(imgNL);
		for (let i = 0; i < imgArray.length; i++) {
			imgArray[i].src = `./img/shop_img/portrait${i + 1}.jpg
			`;
		}
	} else {
		let imgNL = document.querySelectorAll('.carousel-item > img');
		let imgArray = Array.from(imgNL);
		for (let i = 0; i < imgArray.length; i++) {
			imgArray[i].src = `./img/shop_img/carousel${i + 1}.jpg
			`;
		}
	}
})();

// Listens for resizing events
window.addEventListener('resize', function () {
	orientationHandler();
});
