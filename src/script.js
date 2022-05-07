window.rgb = () => {
	document.body.style.transitionDuration = "1s";
	setInterval(() => {
		document.body.style.backgroundColor =
			"rgb(" +
			Math.random() * 255 +
			", " +
			Math.random() * 255 +
			", " +
			Math.random() * 255 +
			")";
	}, 1000);
};
