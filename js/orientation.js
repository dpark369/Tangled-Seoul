// Changes Carousel img based on orientation

window.addEventListener('resize', function orientationHandler() {
	let portrait;
	if (window.innerHeight > window.innerWidth) {
		portrait = true;
	} else {
		portrait = false;
	}
	if (portrait) {
		let imgNL = document.querySelectorAll('.carousel-item > img');
		let imgArray = Array.from(imgNL);
		console.log(imgArray);
		for (let i = 0; i < imgArray.length; i++) {
			imgArray[i].src = `./img/shop_img/portrait${i + 1}.jpeg`;
		}
	}
});

// Fix only firing once
