let _ = require('lodash');

let array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 5));
console.log(_);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColorButton = document.querySelector(".randomgenerator")

var startColor = [
	{
		firstColor:{r:124, g:137, b:146, hex:'#6F7D80'},
		secondColor:{r:28, g:28, b:28, hex:'#1C1C1C'}
	}
];

function randomColorGenerator() {
	var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	return randomColor;
}

function setRandomGradient() {
	startColor[0].firstColor.hex = randomColorGenerator().toString();
	startColor[0].secondColor.hex = randomColorGenerator().toString();

	setInputColors();
}

function setInputColors() {
	color1.value = startColor[0].firstColor.hex;
	color2.value = startColor[0].secondColor.hex;

	setGradient();
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + 
	color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

setInputColors();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColorButton.addEventListener("click", setRandomGradient);