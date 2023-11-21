const faqItems = document.querySelectorAll('.faq-item');
const faqBtns = document.querySelectorAll('.faq-item__btn');
const navBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links__item a');

const currYear = new Date().getFullYear();
const footerYear = (document.querySelector('.footer-year').textContent = currYear);

const scrollTopBtn = document.querySelector('.scroll-to-top');

let menuOpen = false;

const handleNav = () => {
	if (!menuOpen) {
		navBtn.classList.add('open');
		menu.classList.add('open');
		document.body.style.overflow = 'hidden';
		menuOpen = true;
	} else {
		navBtn.classList.remove('open');
		menu.classList.remove('open');
		document.body.style.overflow = 'visible';
		menuOpen = false;
	}
};

const removeActiveFaqItems = () => {
	faqItems.forEach((faqItem) => faqItem.classList.remove('active'));
};

const toggleActiveFaqItems = () => {
	removeActiveFaqItems();
};

faqBtns.forEach((faqBtn) => {
	faqBtn.addEventListener('click', (e) => {
		removeActiveFaqItems();
		e.target.closest('.faq-item').classList.add('active');
	});
});

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollTopBtn.classList.add('active');
	} else {
		scrollTopBtn.classList.remove('active');
	}
});
navBtn.addEventListener('click', handleNav);
navLinks.forEach((navLink) =>
	navLink.addEventListener('click', () => {
		navBtn.classList.remove('open');
		menu.classList.remove('open');
		document.body.style.overflow = 'visible';
		menuOpen = false;
	})
);

// PORTFOLIO
const showProjectBtns = document.querySelectorAll('.project__btn');

showProjectBtns.forEach((item) => {
	item.addEventListener('click', () => {
	item.parentElement.classList.toggle('show')
})
});
