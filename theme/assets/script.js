////////////////////////////scroll////////////////////
window.addEventListener("scroll", function () {
  if (!document.body.classList.contains("white_header")) {
    const moveThreshold = 48;
    const styleThreshold = 450;
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
// let blogSlider = null;
//
// function initBlogSlider() {
// 	const screenWidth = window.innerWidth;
//
// 	if (screenWidth < 1560 && blogSlider === null) {
// 		blogSlider = new Swiper('.blog__posts.swiper', {
// 			slidesPerView: 1.2,
// 			spaceBetween: 16,
// 			breakpoints: {
// 				768: {
// 					slidesPerView: 2,
// 				},
// 				1024: {
// 					slidesPerView: 2.5,
// 				},
// 			},
// 		});
// 	} else if (screenWidth >= 1560 && blogSlider !== null) {
// 		blogSlider.destroy(true, true);
// 		blogSlider = null;
// 	}
// }
//
// // запуск при завантаженні
// initBlogSlider();
//
// // запуск при ресайзі
// window.addEventListener('resize', initBlogSlider);
//# sourceMappingURL=script.js.map
