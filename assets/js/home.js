window.onscroll = onScroll;

function onScroll(event) {
	/* make background header appear */
	var scrollPos = window.pageYOffset;
	var box_h = document.querySelector('.header-text').offsetHeight;
	var header = document.querySelector('header');
	var header_h = header.offsetHeight;

	if (scrollPos >= box_h - header_h) {
		header.classList.add('background-header');
	} else {
		header.classList.remove('background-header');
	}
	/* highlight active section links */
	var scroll_adj = scrollPos + 100;
	var navLinks = document.querySelectorAll('.nav .scroll-to-section a');
	navLinks.forEach(function (navLink) {
		var refElement = document.querySelector(navLink.getAttribute('href').split('/').pop());
		if (refElement.offsetTop <= scroll_adj && refElement.offsetTop + refElement.offsetHeight >= scroll_adj) {
			navLink.classList.add('active');
		}
		else {
			navLink.classList.remove('active');
		}
	});
}