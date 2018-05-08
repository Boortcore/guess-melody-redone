import PreloaderView from './preloader-view';
import renderScreen from '../renderScreen';

class PreloaderScreen {
  init() {
    this.view = new PreloaderView();
    renderScreen(this.view);
  }
}

export default new PreloaderScreen();
