window.rgb = () => {
	document.body.style.transitionDuration = "1s";
	setInterval(() => {
		document.body.style.backgroundColor =
			"rgb(" +
			Math.random() * 75 +
			", " +
			Math.random() * 75 +
			", " +
			Math.random() * 75 +
			")";
	}, 1000);
};
