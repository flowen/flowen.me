import * as PIXI from 'pixi.js';
import { degToRad } from 'canvas-sketch-util/math';
import './index.scss';


const header = document.querySelector('.header');

let CANVAS_WIDTH;
let CANVAS_HEIGHT;
let ASPECT;

const getCanvasDimensions = canvas => {
  CANVAS_WIDTH = canvas.clientWidth;
  CANVAS_HEIGHT = canvas.clientHeight;
  // ASPECT = CANVAS_HEIGHT / CANVAS_WIDTH;
};

const isLandscape = () =>
  window.innerWidth > window.innerHeight ? true : false;

getCanvasDimensions(header);

const app = new PIXI.Application({
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  backgroundColor: 0xf8f6f0,
  autoResize: true,
  antialias: true
});

header.prepend(app.view);

// load the textures
const loader = PIXI.loader.add('wood', 'img/wood-texture-red.jpg');
loader.load(init);

function init(loader, resources) {
  /*
    Steps to create:
    - create sprite w texture + gradient --> maybe replace gradient with shader is now baked in
    - create rectangle w "shader" / displacement map 
    - add scroll functionality
  */
  const centerSprites = () => {
    bgwood.anchor.set(0.5);
    bgwood.width = CANVAS_WIDTH * 1.5;
    bgwood.height = isLandscape() ? CANVAS_HEIGHT * 0.28 : CANVAS_HEIGHT * 0.31;
    bgwood.x = CANVAS_WIDTH * 0.5;
    bgwood.y = isLandscape() ? CANVAS_HEIGHT * 0.45 : CANVAS_HEIGHT * 0.35;
    bgwood.rotation = 22 * (Math.PI / 180);

    const xPosRect = Math.floor(CANVAS_WIDTH * 0.1);
    const widthRect = Math.ceil(CANVAS_WIDTH * 0.8);

    mask.clear();
    rect.clear();

    mask.drawRect(xPosRect, 0, widthRect, CANVAS_HEIGHT);
    rect.beginFill(0xf8f6f0);
    rect.drawRect(xPosRect, 0, widthRect, CANVAS_HEIGHT);
    rect.endFill();

    wood.anchor.set(0.5);
    wood.width = CANVAS_WIDTH * 1.25;
    wood.height = bgwood.height;
    wood.x = CANVAS_WIDTH * 0.5;
    wood.y = bgwood.y;
    wood.rotation = degToRad(28);
  };

  const bgwood = new PIXI.Sprite(resources.wood.texture);
  const wood = new PIXI.Sprite(resources.wood.texture);
  const rect = new PIXI.Graphics();
  const mask = new PIXI.Graphics();

  app.stage.addChild(bgwood, rect, wood);
  wood.mask = mask;

  centerSprites();

  app.ticker.add(delta => {});

  function resize() {
    getCanvasDimensions(header);
    // app.renderer.resize(CANVAS_WIDTH, CANVAS_HEIGHT);
    app.renderer.resize(CANVAS_WIDTH);
    centerSprites();
  }

  window.addEventListener('resize', resize);
}
