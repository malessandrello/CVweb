function encabezado(){
	if ((screen.width > 590)&&(window.outerWidth > 590)){
	if(window.pageYOffset>=document.getElementById("encabezado").offsetTop){
	document.getElementById("encabezado").style.fontSize = "2em";
	document.getElementById("encabezado").style.marginTop = "1.5%";
	document.getElementById("imagen").style.width = "5%";
	}
	else{
	if((screen.width > 950)&&(window.outerWidth > 950)){	
	document.getElementById("encabezado").style.fontSize = "4em";
	document.getElementById("encabezado").style.marginTop = "3%";
	document.getElementById("imagen").style.width = "10%";
	}else {
	document.getElementById("encabezado").style.fontSize = "2.5em";
	document.getElementById("imagen").style.width = "10%";	
}
	}
	}
}

	
function mostrar1(){
if(document.getElementById("contenido1").style.maxHeight){		
	document.getElementById("contenido1").style.maxHeight = null;
	}
	else{
	document.getElementById("contenido1").style.maxHeight = document.getElementById("contenido1").scrollHeight + "px";
}
}
function mostrar2(){
if(document.getElementById("contenido2").style.maxHeight){		
	document.getElementById("contenido2").style.maxHeight = null;
	}
	else{
	document.getElementById("contenido2").style.maxHeight = document.getElementById("contenido2").scrollHeight + "px";
}
}
function mostrar3(){
if(document.getElementById("contenido3").style.maxHeight){		
	document.getElementById("contenido3").style.maxHeight = null;
	}
	else{
	document.getElementById("contenido3").style.maxHeight = document.getElementById("contenido3").scrollHeight + "px";
}
}
function mostrar4(){
if(document.getElementById("contenido4").style.maxHeight){		
	document.getElementById("contenido4").style.maxHeight = null;
	}
	else{
	document.getElementById("contenido4").style.maxHeight = document.getElementById("contenido4").scrollHeight + "px";
}
}

function mostrar5(){
if(document.getElementById("cont1").style.maxHeight){		
	document.getElementById("cont1").style.maxHeight = null;
	}
	else{
	document.getElementById("cont1").style.maxHeight = document.getElementById("cont1").scrollHeight + "px";
}
}

function mostrar6(){
if(document.getElementById("cont2").style.maxHeight){		
	document.getElementById("cont2").style.maxHeight = null;
	}
	else{
	document.getElementById("cont2").style.maxHeight = document.getElementById("cont2").scrollHeight + "px";
}
}

function openNav() {
  document.getElementById("barralateral").style.height = "100%";
}

function closeNav() {
  document.getElementById("barralateral").style.height = "0";
}