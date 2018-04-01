import * as PIXI from 'pixi.js'
import $ from 'jquery'
import p5 from 'p5'
import Vel from 'velocity-animate'

import { profilepicPixi, $profilePic } from './js/profile-pic-effects'
import viz from './js/depthmap-visualiser'

import {sceneTestimonial, scenewhoisRH} from './js/scrollmagic'

// for some CSS stuff
$('html').removeClass('no-js').addClass('js')
$('.contact-me').addClass('show-headings')

// initialize PIXI once the image has been loaded
$profilePic.on('load', profilepicPixi.init() )

// initialiser the visualiser AFTER scrollmagic has initialised
viz.init();



// scrollmagic scenes
scenewhoisRH.on('progress', () => {
	// icons fadeIn
	const $socialIcons = $('.social-anchor')
	$socialIcons.each((i, icon) => {
		Vel(icon, {
		    opacity: [1, 0]
		}, {
		    duration: 250,
		    delay: 500 + (250*i), 
		    easing: 'easeOutQuad'
		})
	})
	scenewhoisRH.off('start')
})

sceneTestimonial.on('start', () => {
	const $testimonials = $('.testimonial')
	$testimonials.each((i, icon) => {
		Vel(icon, {
		    opacity: [1, 0],
		    translateX: [0, '-5rem']
		}, {
		    duration: 500,
		    delay: 250 + (250*i), 
		    easing: 'easeOutQuad'
		})    
	})
	sceneTestimonial.off('start')
})