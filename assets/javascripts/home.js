//Home.js

var $ = jQuery;
var atAboutPage = $('.post').hasClass('about-page');
var isMobile = $("html").hasClass('mobile');
var logo = new RandomLogo();

function squareItem(item) {
	item.each(function() {
		var tile = $(this);
		// tile.css('height','');
		var width = tile.width();
		tile.css('height', width);

	});
}

function sameHeight(item, sibling) {
	item.height(sibling.height());
}

function checkContentHeight() {
	var grid = $('.home-page .grid-group');
	var tileCount = grid.find('.project-tile').length
	grid.removeClass('full-about').removeClass('big-tiles');
	var cHeight = $(".site-footer").height() + $(".site-content").height();
	var thresh = innerHeight + $(".contact").height();
	
	if(cHeight < thresh ) grid.addClass('full-about big-tiles');
	// cHeight = $(".site-footer").height() + $(".site-content").height();
	// if((cHeight < thresh && grid.hasClass('full-about')) || (innerWidth < 600)) grid.addClass('big-tiles');
}

function checkProjectHeights() {
	var infoHeight = $('.project-info').height();
	var footerHeight = $('.site-footer').height();
	if(infoHeight > innerHeight - footerHeight) $('.project-container').addClass('hijack-screen')
}

function preTileHeights() {
	$(".project-tile-content").each(function() {
		var h = $(this).closest('.project-tile').find('.pre-tile-content').height();
		$(this).height(h);
	});
}

function resizeHomeFunctions() {
	checkContentHeight();
	preTileHeights();
	// checkProjectHeights();
}

function globalResizeFunction() {
	logo.randomPlot();
	sameHeight($('.contact-form .center-bg'), $('.contact-form .form'));
	if($('.post').hasClass('home-page')) {
		resizeHomeFunctions();
	}
}

function loadInstagram() {
	if(atAboutPage) {

	  var feed = new Instafeed({
	    get: 'user',
	    userId: 10630013,
	    accessToken: '10630013.467ede5.41c2c14e0ea8443eb10e9190f8530dad',
	    target: 'insta-feed',
	    limit: 2,
	    sortBy: 'most-recent',
	    resolution: 'low_resolution',
	    before: showLoader,
	    after: function() {
	    	hideLoader(true);
	    }
	  });
	  feed.run();
	}
}

function hideLoader(showContent) {
	if(showContent) {
		TweenLite.to(".loader", 0.4, {opacity: 0, delay: 0.2, onComplete: function() {
			$(".loader").addClass('hidden');
		}});
		TweenLite.to($(".page-wrapper"), 0.4, {opacity: 1});
		$(window).resize();
	}
}

function showLoader() {
	$(".loader").removeClass('hidden');
}

function setGAEvents() {
	$('.header-wrapper a').click(function() {
		ga('send', 'event', 'button', 'click', 'main-nav: ' + $(this).attr('href'));
	});

	$('a').click(function() {
		ga('send', 'event', 'button', 'click', 'anchor-tag: ' + $(this).attr('href'));
	});

	$("form input[type='submit']").click(function() {
		ga('send', 'event', 'form', 'submit', $(this).closest('form').attr('name'));
	});

}


$(document).ready(function() {

	globalResizeFunction();
	$(window).resize(globalResizeFunction);
	setGAEvents();

	hljs.initHighlightingOnLoad();


	$('html').waitForImages({
		finished: function() {
			hideLoader(true);
		},
		waitForAll: true
	});

});