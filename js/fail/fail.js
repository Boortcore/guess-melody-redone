import FailView from './fail-view';
import renderScreen from '../renderScreen';
import Application from "../Application";

class FailScreen {
  init() {
    this.view = new FailView();
    renderScreen(this.view);
    this.view.onClick = () => {
      Application.showGame(true);
    };
  }
}

export default new FailScreen();
