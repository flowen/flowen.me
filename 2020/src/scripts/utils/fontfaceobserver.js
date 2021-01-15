/*
To keep things simple, let’s assume you have the following 
@font-face rule somewhere in your style sheet.

@font-face {
  font-family: Output Sans;
  src: url(output-sans.woff2) format('woff2'),
  url(output-sans.woff) format('woff');
}
You load this web font by creating a new FontFaceObserver 
instance and calling its load method.
*/
import FontFaceObserver from 'fontfaceobserver'

const font = new FontFaceObserver('Cinzel', {
  weight: 400,
  style: 'normal',
})

font
  .load()
  .then(() => console.log('Cinzel has loaded.'))
  .catch(() => console.log('Cinzel failed to load.'))
