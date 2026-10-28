document.addEventListener("DOMContentLoaded", function () {
	var bar = document.getElementById("top-bar");
	var btn = document.getElementById("menu-btn");
	var menu = document.getElementById("menu");

	// Shadow on the top bar once the page scrolls
	function onScroll() {
		bar.classList.toggle("scrolled", window.scrollY > 10);
	}
	window.addEventListener("scroll", onScroll, { passive: true });
	onScroll();

	// Mobile menu
	btn.addEventListener("click", function () {
		var open = menu.classList.toggle("open");
		btn.setAttribute("aria-expanded", open);
	});
	menu.querySelectorAll("a").forEach(function (a) {
		a.addEventListener("click", function () {
			menu.classList.remove("open");
			btn.setAttribute("aria-expanded", false);
		});
	});
});
