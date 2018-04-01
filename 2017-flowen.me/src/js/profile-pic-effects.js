import * as PIXI from 'pixi.js'
import $ from 'jquery'

// variables for profile pic and children
const $profilePicHolder = $('.profile-pic')
const $profilePic = $profilePicHolder.find('.profile-pic-image')
const $profilePicCanvas = $profilePicHolder.find('canvas')

const profilepicPixi = (function() {
	let windowHeight
	let scrollTop
	let mod = 0

	let width = $profilePic.width()
	let height = $profilePic.height()
	let renderer
	let view
	let stage
	let displacementFilter
	const loader = new PIXI.loaders.Loader()

	loader.add('sprite', 'images/who-is-rouhun-anyway.png')
	loader.add('displacement','images/who-is-rouhun-anyway.jpg')


	const preloadPixiSprites = () => loader.load(() => initPixi())

	// Get the width and height from the profile pic whe it's done loading
	const initPixi = () => {
		initScroll()

		width = $profilePic.width()
		height = $profilePic.height()

		renderer = new PIXI.autoDetectRenderer(width, height, { transparent: true })	

		// Add the render view object into the page
		view = renderer.view
		$profilePicHolder.append(view)

		setPositionPixi()
		setTheStage()
	}

	//bind scroll events
	const initScroll = () => {
		$(window).on('scroll', () => {
			windowHeight = window.innerHeight
			scrollTop = window.scrollY
			mod = 3.5 - (scrollTop / windowHeight)
		})
	}

	// we set position with js cuz CSS with shapes is giving a headache
	const setPositionPixi = () => {
		let pos = $profilePic.position()
		// view.style.top = `${pos.top}px`
		view.style.left = `${pos.left}px`	
	}

	const setTheStage = () => {
		stage = new PIXI.Container()
		// let's create a sprite
		const spriteProfilePic = PIXI.Sprite.fromImage('images/who-is-rouhun-anyway.png')
		spriteProfilePic.width = width
		spriteProfilePic.height = height

		stage.addChild(spriteProfilePic)

		// and create a texture for displacement fun
		const displacementTexture = new PIXI.Sprite.fromImage('images/who-is-rouhun-anyway.jpg')
		displacementFilter = new PIXI.filters.DisplacementFilter(displacementTexture)
		displacementTexture.width = width
		displacementTexture.height = height

		spriteProfilePic.filters = [displacementFilter]

		stage.addChild(displacementTexture)

		// everyone has entered the stage, set, ready, GO
		animate()
	}

	const animate = () => {
	    requestAnimationFrame(animate)

	    if (mod > 0) mod -= .6
	    displacementFilter.scale.x += mod

	    renderer.render(stage)
	}

	return {
		init: preloadPixiSprites
	}
})()

export { profilepicPixi, $profilePic }