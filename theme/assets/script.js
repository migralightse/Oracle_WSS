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

//////////////////////////header_menu//////////////////////////
const navItems = document.querySelectorAll('.nav-item');
const submenu = document.getElementById('submenu');
const submenuContents = submenu.querySelectorAll('.submenu-content');
const headerBottom = document.querySelector('.header__bottom');
const logo = document.querySelector('.header_logo');
const navLinks = document.querySelectorAll('.nav_link');

// Наведення на головні пункти меню
navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const target = item.dataset.menu;
    submenu.classList.add('visible');
    headerBottom.classList.add('scrolled');
    logo.classList.add('scrolled');
    navItems.forEach(nav => nav.classList.add('scrolled'));
    navLinks.forEach(link => link.classList.add('scrolled')); // ✅ додаємо клас nav_link

    submenuContents.forEach(content => {
      if (content.dataset.content === target) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});

// Наведення на праві елементи меню (Search, Account, Cart)
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    headerBottom.classList.add('scrolled');
    logo.classList.add('scrolled');
    link.classList.add('scrolled'); // ✅ додаємо клас саме до link
  });
});

// При виході мишки з усього хедера — ховаємо меню і прибираємо класи
document.querySelector('.header').addEventListener('mouseleave', () => {
  submenu.classList.remove('visible');
  headerBottom.classList.remove('scrolled');
  logo.classList.remove('scrolled');
  navItems.forEach(nav => nav.classList.remove('scrolled'));
  navLinks.forEach(link => link.classList.remove('scrolled')); // ✅ знімаємо клас
});
//# sourceMappingURL=script.js.map
