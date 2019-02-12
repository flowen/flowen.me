function createGradientSprite(stop1, stop2) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 50);
  
  gradient.addColorStop(0, stop1);
  gradient.addColorStop(1, stop2);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  
  return canvas
}

export default createGradientSprite