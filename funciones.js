function encabezado() {
	if (window.innerWidth > 590) {
		if (window.scrollY >= document.getElementById("encabezado").offsetTop) {
			document.getElementById("encabezado").style.fontSize = "2em";
			document.getElementById("encabezado").style.marginTop = "1.5%";
			document.getElementById("imagen").style.width = "5%";
		} else {
			if (window.innerWidth > 950) {
				document.getElementById("encabezado").style.fontSize = "4em";
				document.getElementById("encabezado").style.marginTop = "3%";
				document.getElementById("imagen").style.width = "10%";
			} else {
				document.getElementById("encabezado").style.fontSize = "2.5em";
				document.getElementById("imagen").style.width = "10%";
			}
		}
	}
}

function mostrar6() {
	if (document.getElementById("cont2").style.maxHeight) {
		document.getElementById("cont2").style.maxHeight = null;
	} else {
		document.getElementById("cont2").style.maxHeight = document.getElementById("cont2").scrollHeight + "px";
	}
}

function openNav() {
	document.getElementById("barralateral").style.height = "100%";
}

function closeNav() {
	document.getElementById("barralateral").style.height = "0";
}
