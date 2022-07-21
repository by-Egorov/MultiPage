const menuLink = document.querySelector('.menu__link')
const modal = document.querySelector('.dropdown-content')
const dropBtn = document.querySelector('.dropbtn')
const modalLang = document.querySelector('.dropdown-content-lang')

const faqItem = document.querySelector('.faq-menu__list')
const monthsBtn = document.querySelector('.chose-plan__button-months')


menuLink.addEventListener('click', () => {
	menuLink.classList.toggle('active')

	if (menuLink.classList.contains('active')) {
		modal.classList.add('active')
	} else {
		modal.classList.remove('active')
	}
})


dropBtn.addEventListener('click', () => {
	dropBtn.classList.toggle('active')

	if (dropBtn.classList.contains('active')) {
		modalLang.classList.add('active')
	} else {
		modalLang.classList.remove('active')
	}
})

faqItem.addEventListener('click', (event) => {
	const target = event.target

	target.classList.toggle('active')
})


monthsBtn.addEventListener('click', (event) => {
	const target = event.target

	target.classList.toggle('active')
})

