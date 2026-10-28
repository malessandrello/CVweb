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

	// Copy email: works even when the visitor has no mail app for "mailto:" links
	var copy = document.getElementById("copy-email");
	if (copy) {
		var label = copy.querySelector("span");
		copy.addEventListener("click", function () {
			var email = copy.dataset.email;
			function done(ok) {
				label.textContent = ok ? "Copied!" : email;
				setTimeout(function () { label.textContent = "Copy email"; }, 2500);
			}
			if (navigator.clipboard && window.isSecureContext) {
				navigator.clipboard.writeText(email).then(function () { done(true); }, function () { done(false); });
			} else {
				var t = document.createElement("textarea");
				t.value = email;
				t.style.position = "fixed";
				t.style.opacity = "0";
				document.body.appendChild(t);
				t.select();
				var ok = false;
				try { ok = document.execCommand("copy"); } catch (e) {}
				document.body.removeChild(t);
				done(ok);
			}
		});
	}
});
