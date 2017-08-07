// import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
import viz from './depthmap-visualiser'

/*
* visualiser controller & scene
*/
const ctrlVisualiser = new ScrollMagic.Controller({
	globalSceneOptions: {
	    triggerHook: 'onLeave'
	}
})

const visualiser = document.querySelector('.cool-visual-stuff')
const sceneVisualiser = new ScrollMagic.Scene({
    triggerElement: visualiser,
    duration: '75%'
})
.setPin(visualiser)
.addTo(ctrlVisualiser)

/*
* visualiser controller & scene
*/
const ctrlwhoisRH = new ScrollMagic.Controller({
	globalSceneOptions: {
	    triggerHook: 'onCenter'
	}
})

const whoisRH = document.querySelector('.who-is-rou-hun-anyway')
const scenewhoisRH = new ScrollMagic.Scene({
    triggerElement: whoisRH,
})
.addTo(ctrlwhoisRH)


/*
* testimonials controller & scene
*/
const ctrlTestimonials = new ScrollMagic.Controller({
	globalSceneOptions: {
	    triggerHook: 'onCenter'
	}
})

const testimonials = document.querySelector('.testimonials')
const sceneTestimonial = new ScrollMagic.Scene({
    triggerElement: testimonials,
})
.addTo(ctrlTestimonials)

export {sceneVisualiser, scenewhoisRH, sceneTestimonial}