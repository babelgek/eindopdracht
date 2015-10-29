// Menu toggle
var menu = document.querySelector('nav')	;

menu.classList.add('onzichtbaarmobiel');

var menuButton = document.querySelector('header> a');

function showMenu(){
	menu.classList.toggle('zichtbaar');
	menu.classList.add('animatie');
}

menuButton.addEventListener('click', showMenu);

// Formulier toggle

var fieldsetproject = document.querySelector('fieldset:nth-of-type(3)')	;
var fieldsetstage = document.querySelector('fieldset:nth-of-type(4)');

fieldsetproject.classList.add('onzichtbaar');
fieldsetstage.classList.add('onzichtbaar');

var projectbutton = document.querySelector('input[value="project"]');
var stagebutton = document.querySelector('input[value="stage"]');

function showProject(){
	fieldsetproject.classList.add('zichtbaar');
	fieldsetproject.classList.add('animatie');
    fieldsetstage.classList.remove('zichtbaar');
}

function showStage(){
	fieldsetstage.classList.add('zichtbaar');
	fieldsetproject.classList.remove('zichtbaar');
}

projectbutton.addEventListener('click', showProject);
stagebutton.addEventListener('click', showStage);

