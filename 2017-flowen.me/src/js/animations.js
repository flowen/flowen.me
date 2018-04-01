/*
    all animations in 1 object

    maybe confusing at first, but from and to are the other way around
    so for example:
    opacity: [1, 0]
    result: 1, 
    from: 0
*/
const ani = {
    fadeIn: {
        p: { opacity: [1, 0] },
        o: { duration: 650, easing: 'easeInSine' }
    },
    fadeInY: {
        p: { translateY: [0, '-150%'], opacity: [1, 0] },
        o: { duration: 400, easing: 'swing' }
    },
    fadeOutY: {
        p: { translateY: ['-150%', 0], opacity: [0, 1] },
        o: { duration: 400, easing: 'swing' }
    },
    // menu items sequence
    showMenuItem: {
        p: { translateY: [0, '50%'], opacity: [1, 0] }
    },
    hideMenuItem: {
        p: { translateY: ['50%', 0], opacity: [0, 1] }
    },
    // logo toggle
    showXeno: {
        p: { opacity: [1, 0] },
        o: { duration: 300, delay: 100 }
    },
    hideXeno: {
        p: { opacity: [0, 1] },
        o: { duration: 50 }
    },
    zoomIn: {
        p: { scaleX: [1.5, 1], scaleY: [1.5, 1] },
        o: { duration: 5000, easing: 'easeInSine'}
    },
    startPlanet: {
        p: {
            translateY: '150%',
            translateX: '150%',
            scale: 2
        },
        o:{
            duration:0
        }
    },
    endPlanet: {
        p: {
            translateY: '0%',
            translateX: '0%',
            scale: 1
        }, 
        o:{
            duration:1000,
            easing: [0.24, 0.6, 0.26, 1.08]
        }
    }
}


export default ani;