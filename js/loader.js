window.addEventListener('load', () => {
	document.querySelector('.page-loader').classList.add('slide-out-right');
	setTimeout(() => {
		document.querySelector('.page-loader').style.display = 'none';
	}, 1000);
});
