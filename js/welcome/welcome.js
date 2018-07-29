import WelcomeView from './welcome-view';
import renderScreen from '../renderScreen';
import Application from "../Application";

class WelcomeScreen {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    renderScreen(this.view);
    this.view.onClick = () => {
      Application.showGame();
    };
  }
}

export default new WelcomeScreen();
