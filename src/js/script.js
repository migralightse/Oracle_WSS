
////////////////////////////scroll////////////////////
window.addEventListener("scroll", function () {
	if (!document.body.classList.contains("white_header")) {
		const moveThreshold = 48;
		const styleThreshold =450;

		const navLinks = document.querySelectorAll(".header_nav .nav__list li > a");
		const headerBottom = document.querySelector(".header__bottom");
		const headerLogo = document.querySelector(".header_logo");

		// Зміщення header__bottom при 48px
		if (window.scrollY > moveThreshold) {
			headerBottom?.classList.add("scrolled_top");
		} else {
			headerBottom?.classList.remove("scrolled_top");
		}

		// Стилізація інших елементів при 300px
		if (window.scrollY > styleThreshold) {
			navLinks.forEach(el => el.classList.add("scrolled"));
			headerLogo?.classList.add("scrolled");
			headerBottom?.classList.add("scrolled");
		} else {
			navLinks.forEach(el => el.classList.remove("scrolled"));
			headerLogo?.classList.remove("scrolled");
			headerBottom?.classList.remove("scrolled");
		}
	}
});



/////////////////////////badge_items_card/////////////////////////////////
document.querySelectorAll('[data-badge="new"]').forEach(card => {
	const badge = document.createElement('span');
	badge.className = 'product-badge';
	badge.textContent = 'New';
	card.querySelector('.card_image').appendChild(badge);
});

///////////////////////////////swiper///////////////////////////
// const blogSlider = new Swiper('.blog__posts', {
// 	slidesPerView: 2,
// 	spaceBetween: 0,
// 	loop: false,
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},
//
// 	breakpoints: {
// 		0: {
// 			slidesPerView: 1,
// 		},
// 		768: {
// 			slidesPerView: 2,
// 		},
// 		1024: {
// 			slidesPerView: 2,
// 		},
// 		1280: {
// 			slidesPerView:  false,
// 		},
// 		1560: {
// 			enabled: false, //
// 		},
// 	},
// });

