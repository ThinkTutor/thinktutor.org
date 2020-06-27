document.addEventListener('DOMContentLoaded', function() {
	document.addEventListener('scroll', onScroll, {passive: true});
});

function onScroll(event) {
	/* make background header appear */
	var scrollPos = document.documentElement.scrollTop;
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
	var navlinks = document.querySelectorAll('.nav .scroll-to-section a');
	navlinks.forEach(function (navlink) {
		var refElement = document.querySelector(navlink.getAttribute('href').split('/').pop());
		if (refElement.offsetTop <= scroll_adj && refElement.offsetTop + refElement.offsetHeight >= scroll_adj) {
			navlink.classList.add('active');
		}
		else {
			navlink.classList.remove('active');
		}
	});
}