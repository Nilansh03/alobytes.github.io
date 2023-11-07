(function($) {
	'use strict';

	var showChar = 100;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";

	$(function () {
		$('.owl-carousel-projects').owlCarousel({
			loop: true,
			stagePadding: 100,
			margin: 20,
			nav: false,
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 3
				},
				1000: {
					items: 4
				}
			}
		})
		var wWidth = $(window).width();
		var menuWidth = $(".navbar-collapse").width();
		$(".navbar-toggler").click(function () {
			$('.collapsing').toggleClass('show');
			$('body').addClass("sidebar-overlay");
		});
		$("#mobile-menu-overlay, .close-menu, .nav-link").click(function () {
			$('.collapse').toggleClass('show');
			$('body').removeClass("sidebar-overlay");
		});

		$("a.nav-link").on('click', function (event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top-50
				}, 1000, function () {

					window.location.hash = hash-50;
				});
			}
		});


		$("a.btn").on('click', function (event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top-50
				}, 800, function () {

					window.location.hash = hash-50;
				});
			}
		});

		AOS.init({
			offset: 0,
			duration: 800,
			easing: 'ease-in-quad',
			delay: 100,
		});

		$("#testimonial-flipster").flipster({
			style: 'coverflow',
			spacing: -.9,
			nav: false,
			loop: true,
			buttons: false,
		});

		$('.flipster-custom-nav-link').click(function () {
			var navlinkSelected = parseInt(this.title);
			$('.flipster-custom-nav-link').removeClass("active");
			$(this).addClass("active");
			$("#testimonial-flipster").flipster('jump', navlinkSelected);
		});

		$('#toggle-switch').click(function () {
			if ($('#toggle-switch').is(':checked')) {
				$('.monthly').addClass("text-active");
				$('.yearly').removeClass("text-active");
				$("#toggle-switch").attr("checked", "checked");
			} else {
				$('.monthly').removeClass("text-active");
				$('.yearly').addClass("text-active");
				$("#toggle-switch").removeAttr("checked");
			}
		});

		// counter Satisfied clients
		var maxScVal = 99;
		var isc = parseInt($('.scVal').text());
		var tim;
		function run() {
			tim = setInterval(function () {
				if (isc >= maxScVal) {
					clearInterval(tim);
					return;
				}
				$('.scVal').text(++isc);
			}, 100);
		}
		run();
		//Counters

		// counter finished Projects
		var maxfPVal = 300;
		var ifP = parseInt($('.fpVal').text());
		var timfP;
		function runfP() {
			timfP = setInterval(function () {

				if (ifP >= maxfPVal) {
					clearInterval(timfP);
					return;
				}
				$('.fpVal').text(++ifP);

			}, 1);
		}
		runfP();
		//finished Projects

		//counter Team Members
		var maxtMVal = 15;
		var itm = parseInt($('.tMVal').text());
		var timtM;
		function runtM() {
			timtM = setInterval(function () {
				if (itm >= maxtMVal) {
					clearInterval(timtM);
					return;
				}
				$('.tMVal').text(++itm);
			}, 100);
		}
		runtM();
		//Team Members

		//counter blog post
		var maxbPVal = 15069;
		var ibP = parseInt($('.bPVal').text());
		var timbP;
		function runbP() {
			timbP = setInterval(function () {
				if (ibP >= maxbPVal) {
					clearInterval(timbP);
					return;
				}
				$('.bPVal').text(++ibP);

			}, 1);
		}
		runbP();
		//blog post



		// read more

		$('.more').each(function () {
			var content = $(this).html();
			var textcontent = $(this).text();

			if (textcontent.length > showChar) {

				var c = textcontent.substr(0, showChar);
				//var h = content.substr(showChar-1, content.length - showChar);

				var html = '<span class="container"><span>' +c + '</span>' + '<span class="moreelipses">' + ellipsestext + '</span></span><span class="morecontent">' + content + '</span>';

				$(this).html(html);
				$(this).after('<a href="" class="morelink">' + moretext + '</a>');
			}

		});


		$(".morelink").click(function () {
			if ($(this).hasClass("less")) {
				$(this).removeClass("less");
				$(this).html(moretext);
				$(this).prev().children('.morecontent').fadeToggle(500, function () {
					$(this).prev().fadeToggle(500);
				});

			} else {
				$(this).addClass("less");
				$(this).html(lesstext);
				$(this).prev().children('.container').fadeToggle(500, function () {
					$(this).next().fadeToggle(500);
				});
			}
			//$(this).prev().children().fadeToggle();
			//$(this).parent().prev().prev().fadeToggle(500);
			//$(this).parent().prev().delay(600).fadeToggle(500);

			return false;
		});


	});
})(jQuery);