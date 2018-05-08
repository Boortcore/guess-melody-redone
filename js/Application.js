import welcomeScreen from './welcome/welcome';
import gameScreen from './game/game';
import statsScreen from './success/success';
import preloaderScreen from './preloader/preloader';
import failScreen from './fail/fail';
import Model from './model/model';
import {getStatistic} from "./data/statistics";

const ControllerID = {
  WELCOME: ``,
  GAME_SCREEN: `game`,
  RESULT_SUCCESS: `stats`,
  RESULT_FAIL: `fail`
};

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);


export default class Application {

  constructor() {
    this.routes = {
      [ControllerID.WELCOME]: welcomeScreen,
      [ControllerID.GAME_SCREEN]: gameScreen,
      [ControllerID.RESULT_SUCCESS]: statsScreen,
      [ControllerID.RESULT_FAIL]: failScreen,
    };

    this.model = new Model();

    window.onhashchange = () => {
      this._changeController(getControllerIDFromHash(location.hash));
    };
  }

  _changeController(route = ``) {
    preloaderScreen.init();
    let controller = this.routes[route];
    if (route.includes(ControllerID.GAME_SCREEN)) {
      this._startGameScreen();
    } else if (route.includes(ControllerID.RESULT_SUCCESS)) {
      this._startResultScreen(route);
    } else {
      controller.init();
    }
  }

  _startGameScreen() {
    const controller = this.routes[ControllerID.GAME_SCREEN];
    this.model.load().then((data) => {
      this.model.saveQuestions(data);
      controller.init(this.model);
    });
  }

  _startResultScreen(route) {
    const {result, getResults, send} = this.model;
    const controller = this.routes[ControllerID.RESULT_SUCCESS];
    const hashId = parseInt(route.split(`=`)[1], 10);
    const initialPromise = result ? send(result) : Promise.resolve();
    initialPromise
      .then(getResults)
      .then((results) => getStatistic(results, hashId))
      .then((statistic) => controller.init(statistic));
  }

  static showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  static showGame() {
    location.hash = ControllerID.GAME_SCREEN;
  }

  static showStats(stamp = ``) {
    location.hash = ControllerID.RESULT_SUCCESS + stamp;
  }

  static showFail() {
    location.hash = ControllerID.RESULT_FAIL;
  }

  init() {
    this._changeController(getControllerIDFromHash(location.hash));
  }
}
