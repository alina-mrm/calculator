let header__burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.header__menu');
let header__icons = document.querySelector('.header__icons');
header__burger.addEventListener('click', function(){
	header__burger.classList.toggle('active');
	header__menu.classList.toggle('active');
	header__icons.classList.toggle('active');
	
})