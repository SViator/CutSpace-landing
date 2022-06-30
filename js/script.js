const form = document.querySelector('.form');
const input = document.querySelector('.form__input');

const burgerToggle = document.querySelector('#burger-togle');
const mobileNav = document.querySelector('#mobile-nav');

input.addEventListener('focus', function () {
	form.classList.add('form--active');
})

input.addEventListener('blur', function () {
	form.classList.remove('form--active');
})

burgerToggle.onclick = function () {
	burgerToggle.classList.toggle('burger-button--active');
	mobileNav.classList.toggle('mobile-nav--active');
}


if (document.documentElement.clientWidth < 480) {

	const footer = document.querySelector('.footer__inner');

	footer.addEventListener('click', (event) => {
		let item = event.target.closest('.inner__item');
		let button = event.target.closest('.up-button');


		if (event.target.classList.contains('item-name')) {
			item.classList.add('active');
		}
		else if (button) {
			item.classList.remove('active');
			console.log(event.target.classList);
		}
	})
}