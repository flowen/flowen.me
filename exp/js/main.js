$('html').addClass('has-js');

// elements
var $navContainer = $('.nav--container');
var $navClose = $('.nav--close');
var $navOverlay = $('.nav--overlay');
var $navItems = $('.nav--main').find('a');
var $socialItems = $('.anchor--social');
var $socialShadows = $('.anchor--shadow');
var $navProjects = $('.nav--project');

TweenLite.defaultEase = Linear.easeNone;

// init
document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('init');
	// think how to split a title that's replaced in React / virtual dom? probably have to re-split each time
	// animateCharsIn('.main--title', 'words');
}

/*
	@target string identifier
	@type string words, chars or lines
	@type string classname for type
*/

var splitNavMain = new SplitText($navItems, { type: 'words, lines', linesClass: 'overflow' });

function animateCharsIn(target, type) {
	var tl = new TimelineLite();
	return tl.staggerTo(target[type], 0.5, { yPercent: 100, ease: 'Circ.easeOut' }, 0.1);
}
	
function animateCharsOut(target, type) {
	var tl = new TimelineLite();
	return tl.staggerTo(target[type], 0.5, { yPercent: 0, ease: 'Circ.easeOut' }, 0.1);
}

// animation nav
var tlMenuIn = new TimelineLite({paused: true});
var tlMenuOut = new TimelineLite({paused: true});

tlMenuOut
	.add('start', '+=.2')
	.staggerFromTo($socialItems, .1, 
		{ scale: 1 }, 
		{ scale: 0.001 }, 
		.04, 'start')
	.call(animateCharsOut, [splitNavMain, 'words'], this, 'start')
	.to($navClose, .2, {opacity: 0}, 'start')
	.staggerFromTo($navProjects, .2, 
		{ x: 0, opacity: 1 }, 
		{ x: -100, opacity: 0 }, 
		.12, 'start+=.4')
	// .to($navOverlay, .2, {x: 0})
    .to($navContainer, .2, {x: '100%'})
	;

	tlMenuIn
		// play with easings
		.fromTo($navOverlay, .2, {x: 0}, {xPercent: -100})
		// .fromTo($navOverlay, .2, {scaleY: 1}, {scaleY: 500})
		.to($navContainer, .25, {xPercent: -10 })
		.to($navContainer, .15, {xPercent: -100 })
		.staggerFromTo($navProjects, .2, 
			{ x: -100, opacity: 0 },
			{ x: 0, opacity: 1 },
			-.12)
		.call(animateCharsIn, [splitNavMain, 'words'], this, 1.2)
		.fromTo($navClose, .2, {opacity: 0}, {opacity: 1}, 1.2)
		.staggerFromTo($socialItems, .1, 
			{ scale: 0.001 }, 
			{ scale: 1 }, 
			-.05, 1.2)
		;

// events
$('.js--open-nav').on('click',  function(e) { 
	tlMenuIn.progress() === 1 ? tlMenuIn.restart() : tlMenuIn.play();
});
$('.js--close-nav').on('click', function(e) { 
	tlMenuOut.progress() === 1 ? tlMenuOut.restart() : tlMenuOut.play();
});