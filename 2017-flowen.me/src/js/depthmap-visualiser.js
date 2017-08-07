import * as PIXI from 'pixi.js'
import axios from 'axios'
import Vel from 'velocity-animate'
import p5 from 'p5'
import 'p5/lib/addons/p5.sound'

import ani from './animations'
import h from './helpers'
import {sceneVisualiser as scene} from './scrollmagic'

// import average from 'analyser-frequency-average'
// import { audioUtil, analyser, bands } from '../utils/analyser'

const holder = document.querySelector('.visualiser-holder')
let displaceX = 7, 
    displaceY = 0
let scrollTop


class Visualiser {
    constructor(visualiser) {
        if (!visualiser) return
        
        this.visualiser = visualiser
        this.loaded = false
        this.isPlaying = true
        
        // pixi setup
        this.currentSprite = 0 // track current sprite to load
        this.currentVisual // current visual on stage

        this.displacementFilter
        this.displacementTexture 

        this.stage
        this.renderer

        this.screensize = window.innerWidth
        this.sprites = new PIXI.loaders.Loader()
        this.depthmaps = new PIXI.loaders.Loader()

        // bind function in constructor
        this.animate = this.animate.bind(this)

        // SOUNDCLOUD GIMME
        this.client_id = ''

        // mouse 
        this.cursorX = 0

        // audio analyzer values
        this.freqs
        this.subAvg
        this.lowAvg
        this.midAvg
        this.highAvg

        this.t = 0
        this.tprev = 0

        this.mic
    }


    init() {
        const viz = this

        document.onmousemove = (e) => viz.cursorX = e.clientX

        // function getVisuals() {
        //   return axios({
        //     url: visuals,
        //     type: 'GET',
        //     dataType: 'json'
        //   })
        // }

        // function getDepthmaps() {
        //     return axios({
        //         url: depthmaps,
        //         type: 'GET',
        //         dataType: 'json'
        //     })
        // }

        // axios.all( [getVisuals(), getDepthmaps()] )
            // .then(axios.spread( (visuals, depthmaps) => {
                // Both requests are now complete, we add them to different arrays
                // for (const visual of visuals.data) {
                //     const { full, large, medium, medium_large, thumbnail } = visual.media_details.sizes
                //     const title = visual.title.rendered
                //     // name, url, options
                //     viz.sprites.add(title, full.source_url)
                // }
                // for (const depthmap of depthmaps.data) {
                //     const { full, large, medium, medium_large, thumbnail } = depthmap.media_details.sizes
                //     const title = depthmap.title.rendered
                //     // name, url, options
                //     viz.depthmaps.add(title, full.source_url)
                // }

                //i'm lazy, here are the 2 arrays with visuals instead of REST endpoints
                viz.sprites.add('01', 'images/viz-01.jpg')
                viz.sprites.add('02', 'images/viz-02.jpg')
                viz.sprites.add('03', 'images/viz-03.jpg')
                viz.sprites.add('04', 'images/viz-04.jpg')
                viz.depthmaps.add('01', 'images/dm-01.jpg')
                viz.depthmaps.add('02', 'images/dm-02.jpg')
                viz.depthmaps.add('03', 'images/dm-03.jpg')
                viz.depthmaps.add('04', 'images/dm-04.jpg')

                const spritesL   = viz.sprites.length
                const depthmapsL = viz.depthmaps.length
                if(spritesL != depthmapsL) console.log(`not same amount of sprites(${spritesL}) and depthmaps(${depthmapsL})!!! check wordpress CMS`)

                const progressLoader = document.querySelector('.progress-loader')
                const progressBar = progressLoader.querySelector('.progress-bar')
                const percentage  = progressLoader.querySelector('.percentage')

                /*
                    load / progress / onComplete
                */
                viz.sprites.onProgress.add((data) => {
                    Vel(progressBar, { 
                        width: `${parseInt(data.progress)}%` 
                    }, { 
                        duration: 70, 
                        easing: 'swing'
                    })
                    percentage.textContent = `${parseInt(data.progress)}%`
                })

                // viz.sprites.onLoad.add(() => console.log('a file has loaded'))
                // viz.sprites.onComplete.add((data) => progressLoader.parentNode.removeChild(progressLoader) )
                viz.sprites.onError.add((data) => console.log('oh noes error!'))
                viz.sprites.load(() => { 
                    viz.initPixiContainer()
                    progressLoader.parentNode.removeChild(progressLoader)
                })
            // })
            
        // ).catch( (e) => console.log('Error: ' + e) )

        window.addEventListener('DOMContentLoaded', () => {
            // console.log('DOMContentLoaded')
            // if (Modernizr.getusermedia) {
                viz.mic = new p5.AudioIn()
                viz.mic.start()
            // } else {
                // console.log('getUserMedia() is not supported in your browser');
            // }
        })
    }

    /*
        initialise the canvas
        only called once after assets are loaded
    */
    initPixiContainer() {
        const viz = this
        viz.stage = new PIXI.Container()
        viz.renderer = new PIXI.autoDetectRenderer(h.windowWidth, h.windowHeight)

        const loader = document.querySelector('.progress-loader')
        Vel(loader, {
            opacity: [0, 1]}, 
        {
            duration: 500, complete: () => {
                viz.visualiser.appendChild(viz.renderer.view)
                viz.loaded = true
                viz.newImage() // show first image
            }
        })

        this.visualiser.addEventListener('click', () => viz.newImage())
    }

    // show a new (Random) image
    newImage() {
        const viz = this
        Vel(viz.visualiser, 'stop')

        // Let's loop through all sprites and find the depthmap according to it
        const resourcesSprites = viz.sprites.resources,
              keySprite = Object.keys(resourcesSprites),
              resourcesDepthmaps = viz.depthmaps.resources,
              keyDepthmap = Object.keys(resourcesDepthmaps)

        // let's grab a random image with the same depthmap
        let random = h.getRandomInt(0, keySprite.length-1),
            thisSprite = resourcesSprites[keySprite[random]],
            thisDepthmap = resourcesDepthmaps[keyDepthmap[random]]

        // if it's the same -> recursive
        if (random === viz.currentSprite) {
            viz.newImage() 
            return
        } else {
            viz.currentSprite = random
        }

        // let's destroy the old sprites when there is more then one
        if (viz.stage.children.length > 1) viz.stage.removeChildren(1)

        // set DepthMAP on stage
        viz.displacementTexture = new PIXI.Sprite.fromImage(thisDepthmap.url)
        viz.displacementTexture.width = h.windowWidth

        // set main visual on stage
        viz.currentVisual = new PIXI.Sprite.fromImage(thisSprite.url)
        viz.currentVisual.width = h.windowWidth

        // change these to change aspect ratio
        // viz.displacementTexture.height = h.windowHeight
        // viz.currentVisual.height = h.windowHeight

        // create a displacement filter and add it
        viz.displacementFilter = new PIXI.filters.DisplacementFilter(viz.displacementTexture)
        viz.currentVisual.filters = [viz.displacementFilter]

        viz.stage.addChild(viz.displacementTexture)
        viz.stage.addChild(viz.currentVisual)
    }

    getAudioValues() {
        const viz = this

        //update frequencies
        // viz.freqs = audioUtil.frequencies()

        // update average of bands
        // viz.subAvg = average(analyser, viz.freqs, bands.sub.from, bands.sub.to)
        // viz.lowAvg = average(analyser, viz.freqs, bands.low.from, bands.low.to)
        // viz.midAvg = average(analyser, viz.freqs, bands.mid.from, bands.mid.to)
        // viz.highAvg = average(analyser, viz.freqs, bands.high.from, bands.high.to)
    }

    stop() {
        this.isPlaying = false
    }

    start() {
        this.isPlaying = true
    }

    /*
        render that shit jo
    */
    animate() {
        const viz = this
        // get all audio values
        // viz.getAudioValues()

        /* smooth the object movement */
        // viz.tprev = viz.t * .75
        // const xDisplace = .0025 + viz.lowAvg + viz.tprev

        function displaceX() {
            // displaceX by scroll:
            // displaceX = 0
            // scrollTop = window.scrollY
            // let s = Math.sin(Math.PI * scrollTop/100)
            
            // displaceX = s * (scrollTop / 100)

            // let t = h.map(displaceX, -25, 25, -2, 2)
            // viz.displacementFilter.scale.x += t

            // viz.cursorX < viz.screensize/2 ? console.log('left') : console.log('right')
            
            var x = h.map(viz.cursorX, 0, viz.screensize, -5, 5)
            viz.displacementFilter.scale.x += x
        }


        // move displacement map with the level of sound from the mic
        function displaceY() {
            // viz.displacementFilter.scale.y = Math.sin(Math.PI * viz.lowAvg*(h.getNegOrPos()) )

            if (typeof viz.mic === 'undefined') return
            let micLevel = viz.mic.getLevel()
            if (micLevel > 0.1) viz.displacementFilter.scale.y += micLevel * 100
        }
        
        // render and render
        if (viz.isPlaying) {
            displaceX()
            displaceY()
            viz.renderer.render(viz.stage)
        } else {
            Vel(viz.visualiser, 'stop')
        }
            
        requestAnimationFrame(this.animate.bind(this))
    }
}

const viz = new Visualiser(holder)

// add scene events to start and stop the visualiser
scene.on('enter', () => {
    if (viz.loaded) {
        viz.start()
        viz.animate()        
    }
})

scene.on('leave', () => viz.stop())

export default viz