import Swup from "swup";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";
import SwupProgressPlugin from "@swup/progress-plugin";
import SwupScrollPlugin from "@swup/scroll-plugin";
const swup = new Swup({
	plugins: [
		new SwupA11yPlugin(),
		new SwupPreloadPlugin(),
		new SwupProgressPlugin({
			transition: 100,
			delay: 100,
		}),
		new SwupScrollPlugin({
			doScrollingRightAway: true,
			animateScroll: false,
		}),
	],
});

const navToggle = document.getElementById("navtoggle") as HTMLInputElement;
swup.on("contentReplaced", () => {
	navToggle.checked = false;
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
