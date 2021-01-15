import Highway from '@dogstudio/highway'
import { dom } from '../utils/dom'

class HomeRenderer extends Highway.Renderer {
  onEnter() {
    console.log('home onEnter')
    console.log(this.properties.view)
  }

  // onLeave() {
  //   console.log('home onLeave')
  // }

  // onEnterCompleted() {
  //   console.log('home onEnterCompleted')
  // }

  // onLeaveCompleted() {
  //   console.log('home onLeaveCompleted')
  // }
}

export default HomeRenderer
