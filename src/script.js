import Swup from "swup";
import SwupPreloadPlugin from "@swup/preload-plugin";
import SwupScrollPlugin from "@swup/scroll-plugin";
import SwupSlideTheme from "@swup/slide-theme";

const swup = new Swup({
	plugins: [
		new SwupPreloadPlugin(),
		new SwupScrollPlugin({
			animateScroll: false,
			doScrollingRightAway: true,
		}),
		new SwupSlideTheme(),
	],
});

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
