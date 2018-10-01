import GenreScreen from '../genre/genre';
import ArtistScreen from '../artist/artist';
import TimerView from '../timer/timer-view';
import Application from "../Application";
import {TOTAL_TIME} from "../constants/constants";
import preloadScreen from '../preloader/preloader';

class GameScreen {
  constructor(model) {
    this._interval = null;
    this.model = model;
  }

  init() {
    this.screen = this.getScreen();
    this.screen.init();
    this.startGame();
    this.screen.getAnswer = (currentAnswer) => {
      this.stopGame();
      this.model.updateState(currentAnswer);
      if (this.model.isFail()) {
        this.goToFailScreen();
      } else if (this.model.isSuccess()) {
        this.goToStatsScreen();
      } else {
        this.init();
      }
    };
  }

  stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this.updateTimer();
    this._interval = setInterval(() => {
      this.model.tick();
      this.updateTimer();
    }, 1000);
  }

  getScreen() {
    let Screen = null;
    let data = this.model.getQuestion();
    const nextScreenType = data.type;
    switch (nextScreenType) {
      case `genre`:
        Screen = GenreScreen;
        break;
      case `artist`:
        Screen = ArtistScreen;
        break;
      default:
        break;
    }
    return new Screen(data);
  }

  updateTimer() {
    try {
      const time = this.model.getTime();
      if (time < 1) {
        this.goToFailScreen();
      }
      const timer = new TimerView(time);
      const timerWrapper = document.querySelector(`.main-timer`);
      timerWrapper.innerHTML = ``;
      timerWrapper.appendChild(timer.element);
    } catch (err) {
      this.finishGame();
    }
  }

  goToFailScreen() {
    this.finishGame();
    Application.showFail();
  }

  finishGame() {
    this.stopGame();
    this.model.resetState();
  }

  goToStatsScreen() {
    preloadScreen.init();
    const data = {id: Date.now(), time: TOTAL_TIME - this.model.getTime(), answers: this.model.getAnswerCounter()};
    this.model.result = JSON.stringify(data);
    this.finishGame();
    Application.showStats(`=${data.id}`);
  }

}

export default GameScreen;
