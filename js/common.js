const menuLink = document.querySelector('.menu__link')
const modal = document.querySelector('.dropdown-content')
const dropBtn = document.querySelector('.dropbtn')
const modalLang = document.querySelector('.dropdown-content-lang')

const faqItem = document.querySelector('.faq-menu__list')
const sixMonthBtn = document.querySelector('.btn-months')
const twelveMonthsBtn = document.querySelector('.btn-months-choise')
const planCard = document.querySelector('.chose-plan-card')

// Menu CLick
menuLink.addEventListener('click', menuClick)

function menuClick() {
	menuLink.classList.toggle('active')

	if (menuLink.classList.contains('active')) {
		modal.classList.add('active')
	} else {
		modal.classList.remove('active')
	}
}
// Menu CLick

// Menu Lang
dropBtn.addEventListener('click', btnClick)

function btnClick() {
	dropBtn.classList.toggle('active')

	if (dropBtn.classList.contains('active')) {
		modalLang.classList.add('active')
	} else {
		modalLang.classList.remove('active')
	}
}
// Menu Lang

faqItem.addEventListener('click', (event) => {
	const target = event.target

	target.classList.toggle('active')
})

// Monts btn
twelveMonthsBtn.addEventListener('click', twelveMonths)
sixMonthBtn.addEventListener('click', sixMonth)

function twelveMonths() {
	twelveMonthsBtn.classList.add('active')
	sixMonthBtn.classList.remove('active')

	if (twelveMonthsBtn.classList.contains('active')) {
		planCard.classList.add('active')
	} else {
		planCard.classList.remove('active')
	}
}

function sixMonth() {
	sixMonthBtn.classList.add('active')
	twelveMonthsBtn.classList.remove('active')

	if (sixMonthBtn.classList.contains('active')) {
		planCard.classList.remove('active')
	} else {
		planCard.classList.add('active')
	}
}
// Monts btn

