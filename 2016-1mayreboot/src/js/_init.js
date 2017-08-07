/*
    initialise the canvas
    only called once after assets are loaded
*/
function initPixiContainer() {
    stage = new PIXI.Container();
    renderer = new PIXI.autoDetectRenderer(
        windowWidth,
        windowHeight
    );

    //fake preloader, TODO: MAKE IT REALZ
    $('.loader').fadeOut(function() {
        document.getElementById('canvas').appendChild(renderer.view);

        // show navigation and init everything
        $.Velocity.RunSequence(loadSequence);
        init();
    });

    // so it's loaded, let's show an image
    newImage();
    
    // and start animate()
    animate();
}

// once assets are loaded, we load the stage
assLoader.once('complete', initPixiContainer());

// setup active link and section
function init() {
    $('.section-intro').addClass('current-section');
    $navAnchors.first().addClass('active');
}