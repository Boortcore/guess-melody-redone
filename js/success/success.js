import SuccessView from './success-view';
import renderScreen from '../renderScreen';
import Application from "../Application";

class SuccessScreen {
  init(statistic) {
    this.view = new SuccessView(statistic);
    renderScreen(this.view);
    this.view.onClick = () => {
      Application.showGame();
    };
  }
}

export default SuccessScreen;
