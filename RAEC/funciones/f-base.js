const body = document.querySelector("body");
const navegador = document.querySelector(".navegador");
const btnMenu = document.querySelector(".boton-menu");
const imgBanner = document.querySelector(".banner img");
btnMenu.onclick = function(){
	this.classList.toggle("open");
	body.classList.toggle("no-scroll");
	navegador.classList.toggle("nav-open");
}
body.onscroll = function(){
	var posImgBanner = window.pageYOffset * 0.8;
	imgBanner.style.top = posImgBanner + "px";
}