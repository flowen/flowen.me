var sprites = ['berlin.jpg','flying.jpg','ganesh.jpg','japan.jpg','moondark.jpg', 'moonlight.jpg', 'nihon.jpg', 'terminator.jpg'];

var currentImage,
    mainVisual, displacementFilter, displacementTexture, imageInterval, 
    stage, renderer,
    playCanvas = true;

var windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;

//why not have some fun with the mic
if (Modernizr.getusermedia) {
    var mic = new p5.AudioIn();
    mic.start();
} else {
    console.log('getUserMedia() is not supported in your browser');
}

/*
    Assetloader to preload all sprites
*/
var assLoader = PIXI.loader;

for (var i = 0; i < sprites.length; i++) {
    assLoader.add(sprites[i],'dist/img/visuals/'+ sprites[i]);
}

function newImage() {
    $('#canvas').velocity('stop');
    $('#canvas').velocity(zoomIn.p, zoomIn.o);
    
    // Let's loop through all sprites and find the depthmap according to it
    var sprites = assLoader.resources,
        spriteKeys = Object.keys(sprites);

    // image and image depth map have the same name, but different folders.
    var randomImage = h.getRandomInt(0, spriteKeys.length-1),
        thisImage = sprites[spriteKeys[randomImage]];

    if (randomImage === currentImage) {
        newImage();
        return;
    } else {
        currentImage = randomImage;
    }

    // set DepthMAP
    displacementTexture = new PIXI.Sprite.fromImage('dist/img/dmaps/' + thisImage.name);
    displacementTexture.width = windowWidth;
    stage.addChild(displacementTexture);

    // let's destroy the old sprites when there are 4+
    if (stage.children.length > 4) {
        stage.removeChildren(4);
    }

    // create a displacement filter
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementTexture);

    // main visual randomized
    mainVisual = new PIXI.Sprite.fromImage(thisImage.url);
    mainVisual.width = windowWidth;
    stage.addChild(mainVisual);

    // add filters
    mainVisual.filters = [displacementFilter];

    // center mainVisual
    var mainVisualX = (windowWidth - mainVisual.width) / 2;
    mainVisual.position.x = mainVisualX;
    mainVisual.position.y = 0;

    // center displacementMap
    var dmapX = (windowWidth - displacementTexture.width) / 2;
    displacementTexture.position.x = dmapX;
    displacementTexture.position.y = 0;
}

/*
    animate that shit jo
*/

function animate() {
    // move displacement filter around
    displacementFilter.scale.x += 1.25;

    if (Modernizr.getusermedia) {
        var micLevel = mic.getLevel();

        // move displacement map with the level of sound from the mic
        if (micLevel > 0.1) {
            displacementFilter.scale.y += micLevel * 100;
        }
    }


    // render and animate
    if (playCanvas) {
        renderer.render(stage);
    } else {
        $('#canvas').velocity('stop');
    }
    // and start animate()
    if (Modernizr.requestanimationframe) {
        requestAnimationFrame(animate);
    }
}

setInterval(function() {
    newImage();
}, 5000);