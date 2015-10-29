// Menu toggle
var menu = document.querySelector('nav')	;

menu.classList.add('onzichtbaarmobiel');

var menuButton = document.querySelector('header> a');

function showMenu(){
	menu.classList.toggle('zichtbaar');
	menu.classList.add('animatie');
}

menuButton.addEventListener('click', showMenu);
