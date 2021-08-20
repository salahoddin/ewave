const menu = document.querySelector('#menu-bars')
const navbar = document.querySelector('.navbar')

// change menu icon to x, and navbar class to active
menu.onclick = () => {
	menu.classList.toggle('fa-times')
	navbar.classList.toggle('active')
}

window.onscroll = () => {
	menu.classList.remove('fa-times')
	navbar.classList.remove('active')
}

// change class of search-form to active when search-icon is clicked
document.querySelector('#search-icon').onclick = () => {
	document.querySelector('#search-form').classList.toggle('active')
}

// remove class of search-form when close icon is clicked
document.querySelector('#close').onclick = () => {
	document.querySelector('#search-form').classList.remove('active')
}

var swiper = new Swiper('.home-slider', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	loop: true,
})
