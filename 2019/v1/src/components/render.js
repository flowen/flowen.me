import * as PIXI from 'pixi.js';

import './index.scss';


  /*
    Steps to create:
    - create sprite w texture + gradient
    - create rectangle w "shader" / displacement map

    create sprite
    position offscreen
    loaded() => animate into screen
  */

(function() {
  let _APP, _LOADER;
  const WIN_WIDTH = window.innerWidth;
  const WIN_HEIGHT = window.innerHeight;

  /**
   * @description setup of renderer, textures, bindings
   */

  const resize = () => _APP.renderer.resize(WIN_WIDTH, WIN_HEIGHT);


  function setup() {
    // renderer
    _APP = new PIXI.autoDetectRenderer(WIN_WIDTH, WIN_HEIGHT, {
      transparent: true,
      resolution: 1,
      autoResize: true,
      backgroundColor: 0xf8f6f0
    });

    // bindings
    window.addEventListener('resize', resize);

    // load textures
    _LOADER = new PIXI.loaders.Loader();
    _LOADER.add('wood', 'img/wood-texture.jpg');
    _LOADER.load(init);
  }

  function animate() {
    window.requestAnimationFrame(animate);
  }

  
  function init() {
    const header = document.querySelector('.header');
    header.appendChild(_APP.view);
    animate();
  }

  // fire!
  setup();
})();
