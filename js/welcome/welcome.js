import WelcomeView from './welcome-view';
import renderScreen from '../renderScreen';
import Application from "../Application";

// export default (state = initialState) => {
//   const welcome = new WelcomeView(state);
//
//   welcome.onClick = () => {
//     renderScreen(getScreenInfo(state));
//   };
//   return welcome.element;
// };

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
