const faqItems = document.querySelectorAll('.faq-item');
const faqBtns = document.querySelectorAll('.faq-item__btn');
const navBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links__item a');

// FOOTER YEAR
const currYear = new Date().getFullYear();
const footerYear = (document.querySelector('.footer-year').textContent = currYear);
// SCROLL TOP
const scrollTopBtn = document.querySelector('.scroll-to-top');

const cookieModal = document.querySelector('.cookie-modal');
const cookieBtn = document.querySelector('.cookie-btn');

// FORM
const formBtn = document.querySelector('.form-btn');
const msgStatus = document.querySelector('.msg-status');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');

// FORM CHECKER
// const formChecker = (input) => {
// 	if (input.value.trim().length < 3) {
// 		formBtn.disabled = true;
// 		formBtn.style.cursor = 'not-allowed';
// 	} else {
// 		formBtn.disabled = false;
// 		formBtn.style.cursor = 'pointer';
// 	}
// };

// [inputName, inputEmail].forEach((input) =>
// 	input.addEventListener('keyup', () => {
// 		formChecker(input);
// 	})
// );

const formChecker = () => {
	[inputEmail, inputName].forEach((input) => {
		if (input.value.trim().length === 0) {
			input.parentElement.classList.add('error');
			input.nextElementSibling.textContent = `Pole nie może być puste!`;
		} else if (input.value.trim().length <= 3) {
			input.parentElement.classList.add('error');
			input.nextElementSibling.textContent = `Pole musi składać sie z co najmniej 3 znaków!`;
		} else {
			input.parentElement.classList.remove('error');
			input.nextElementSibling.textContent = ``;
		}
	});
};

formBtn.addEventListener('click', formChecker)

function isSendForm() {
	if (document.location.search === '?mail_status=sent') {
		msgStatus.classList.add('success');
		msgStatus.textContent = 'Wiadomość wysłana!';
		setTimeout(() => {
			msgStatus.classList.remove('success');
		}, 3000);
	} else if (document.location.search === '?mail_status=error') {
		msgStatus.classList.add('error');
		msgStatus.textContent = 'Upsss.. coś poszło nie tak :(';
		setTimeout(() => {
			msgStatus.classList.remove('error');
		}, 3000);
	}
}
isSendForm();

// COOKIE
const cookieHandle = () => {
	if (localStorage.getItem('cookie') === 'accept') {
		cookieModal.close();
	} else {
		cookieModal.showModal();
	}
};
cookieBtn.addEventListener('click', () => {
	localStorage.setItem('cookie', 'accept');
	cookieHandle();
});

const showCookie = () => {
	setTimeout(cookieHandle, 5000);
};
showCookie();

// MENU
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
	if (window.scrollY > 200) {
		menu.classList.add('expand');
		scrollTopBtn.classList.add('active');
	} else {
		menu.classList.remove('expand');
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
		item.parentElement.classList.toggle('show');
	});
});

// DARKMODE
const themeBtn = document.querySelector('.btn-darkMode');
const moonIco = document.querySelector('.dark');
const sunIco = document.querySelector('.light');
const root = document.documentElement;
let isDark = true;

const toggleTheme = () => {
	if (isDark) {
		// LIGHTSTYLE
		root.style.setProperty('--white-color', '#f9f9f9');
		root.style.setProperty('--pure-white-color', '#fff');
		root.style.setProperty('--box-shadow-dark', 'rgba(16, 4, 4, 0.15)');

		root.style.setProperty('--dark-color', '#1a1a1c');
		root.style.setProperty('--dark-color-light', '#222');
		root.style.setProperty('--box-shadow-light', 'rgba(255, 255, 255, 0.15)');
		isDark = false;
		moonIco.style.display = 'none';
		sunIco.style.display = 'block';
		// CREATING SAVE IN LS
		localStorage.setItem('theme', 'light');
	} else if (!isDark) {
		// DARK STYLE
		root.style.setProperty('--white-color', '#1a1a1c');
		root.style.setProperty('--pure-white-color', '#222');
		root.style.setProperty('--box-shadow-dark', 'rgba(255, 255, 255, 0.15)');

		root.style.setProperty('--dark-color', '#f9f9f9');
		root.style.setProperty('--dark-color-light', '#fff');
		root.style.setProperty('--box-shadow-light', 'rgba(16, 4, 4, 0.15)');
		isDark = true;
		moonIco.style.display = 'block';
		sunIco.style.display = 'none';
		// CREATING SAVE IN LS
		localStorage.setItem('theme', 'dark');
	}
};

const checkTheme = () => {
	localStorage.getItem('theme') === 'light' ? (isDark = true) : (isDark = false);
	toggleTheme();
};

checkTheme();
themeBtn.addEventListener('click', toggleTheme);

// ANIMATION
const animateItems = document.querySelectorAll('.animate');
const animateElements = () => {
	const triggerBottom = (window.innerHeight / 5) * 4;
	animateItems.forEach((item) => {
		const itemTop = item.getBoundingClientRect().top;
		if (itemTop < triggerBottom) {
			item.classList.add('appear');
		}
	});
};

window.addEventListener('scroll', animateElements);

// PRELOADER
document.body.style.overflow = 'hidden';
window.addEventListener('load', () => {
	const preloader = document.querySelector('.preloader');
	preloader.classList.add('loader-hidden');
	document.body.style.overflow = 'visible';
	preloader.addEventListener('transitionend', () => {
		preloader.remove();
	});
});

// SCROLLSPY
const removeAllActive = () => {
	document.querySelectorAll('.nav-links__item a').forEach((link) => link.classList.remove('active'));
};
const scrollSpy = () => {
	const sections = document.querySelectorAll('.section').forEach((section) => {
		const sectionTop = section.getBoundingClientRect().top * 1.5;
		const triggerBottom = window.innerHeight;
		if (triggerBottom > sectionTop) {
			const navLinksSpy = document.querySelectorAll('.nav-links__item a').forEach((link) => {
				const linkID = (linkKey = link.getAttribute('href').slice(1, link.length));
				if (section.id === linkID) {
					removeAllActive();
					link.classList.add('active');
				}
			});
		} else if (window.scrollY === 0) {
			removeAllActive();
		}
	});
};

window.addEventListener('scroll', scrollSpy);
