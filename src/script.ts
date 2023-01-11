import flamethrower from "flamethrower-router";
flamethrower({ prefetch: "hover" });
window.addEventListener("flamethrower:router:end", () => {
	window.scrollTo(0, 0);
});
