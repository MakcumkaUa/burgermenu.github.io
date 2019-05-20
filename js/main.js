// JavaScript source code
var burgerBtn = document.querySelector('#burgerMenu');
var mainMenuItems = document.querySelector('#mainMenuItems');

burgerBtn.onclick = function() {
	mainMenuItems.classList.toggle('mainMenu__items-mobileShow');
}// JavaScript source code
