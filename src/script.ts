import Swup from "swup";
import SwupPreloadPlugin from "@swup/preload-plugin";
import SwupScrollPlugin from "@swup/scroll-plugin";
const swup = new Swup({
	plugins: [
		new SwupPreloadPlugin(),
		new SwupScrollPlugin({
			doScrollingRightAway: true,
			animateScroll: false,
		}),
	],
});

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
