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
