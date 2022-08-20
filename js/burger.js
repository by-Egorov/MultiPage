const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
const bodyLock = document.querySelector('body')
headerBurger.addEventListener('click', burger)

function burger() {
	headerBurger.classList.toggle('active')
	headerMenu.classList.toggle('active')

	if(headerMenu.classList.contains('active')) {
		bodyLock.classList.add('lock')
	} else {
		bodyLock.classList.remove('lock')
	}
}