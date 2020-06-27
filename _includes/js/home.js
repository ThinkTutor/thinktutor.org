(function ($) {

	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});

	$(document).ready(function () {
		$(document).on("scroll", onScroll);
	});

	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		$('.nav a').slice(0,-1).each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href").split("/").pop());
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.nav ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else {
				currLink.removeClass("active");
			}
		});
	}

})(window.jQuery);