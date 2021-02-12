/* --- Highlight nav links on scroll --- */
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
	};
	/* highlight active section links */
	var scroll_adj = scrollPos + 100;
	var navLinks = document.querySelectorAll('.navbar .navbar-nav .nav-item a.nav-link');
	navLinks.forEach(function (navLink) {
		var refElement = document.querySelector(navLink.getAttribute('href').split('/').pop());
		if (refElement.offsetTop <= scroll_adj && refElement.offsetTop + refElement.offsetHeight >= scroll_adj) {
			navLink.classList.add('active');
		}
		else {
			navLink.classList.remove('active');
		}
	});
};

/* --- submit form --- */

var endpoint = "https://nnmb1j35mg.execute-api.us-east-1.amazonaws.com/default/thinktutor";
function buildJsonFormData(form) {
	const jsonFormData = {};
	for (const pair of new FormData(form)) {
		jsonFormData[pair[0]] = pair[1];
	};
	return jsonFormData;
};
var form = document.getElementById("contact");
var formMessage = document.getElementById("form-message");
var lockModal = document.getElementById("lock-modal");
onSubmit = function (token) {
	/* get data from form */
	var formData = new buildJsonFormData(form);
	if (formData["h-captcha-response"] == "") {
		hcaptcha.reset();
		hcaptcha.execute();
	} else {
		/* lock the form */
		lockModal.classList.remove("d-none");
		var xhr = new XMLHttpRequest();
		xhr.open("POST", endpoint, true);
		xhr.onload = function (e) {
			var response = JSON.parse(xhr.response);
			if (xhr.status === 200) {
				hcaptcha.reset();
				form.reset();
				formMessage.classList.remove("d-none");
				formMessage.classList.add("alert-success");
				formMessage.innerHTML = "Success! We have sent you an email.";
			} else {
				hcaptcha.reset();
				formMessage.classList.remove("d-none");
				formMessage.classList.add("alert-warning");
				formMessage.innerHTML = "Error: " + response.error;
			};
			/* Unlock the form */
			lockModal.classList.add("d-none");
		};
		xhr.setRequestHeader('Content-Type', 'text/plain');
		xhr.send(JSON.stringify(formData));
	};
};