import GenreView from '../genre/genre-view';
import ArtistView from '../artist/artist-view';
import TimerView from '../timer/timer-view';
import Application from "../Application";
import {TOTAL_TIME} from "../constants/constants";
import preloadScreen from '../preloader/preloader';

function changeView(screenView) {
  const mainContainer = document.querySelector(`section.main`);
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(screenView.element);
}

class GameScreen {
  constructor() {
    this._interval = null;
  }

  init(model) {
    if (model) {
      this.model = model;
    }
    this.view = this.getView();
    changeView(this.view);
    this.startGame();
    this.view.onClick = (currentAnswer) => {
      this.stopGame();
      this.model.updateState(currentAnswer);
      if (this.model.getLives() === 0 || this.model.getTime() < 0) {
        this.goToFailScreen();
      } else if (this.model.getLevel() > this.model.numberOfQuestions - 1) {
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

  getView() {
    let View = null;
    let data = this.model.getQuestion();
    const nextScreenType = data.type;
    switch (nextScreenType) {
      case `genre`:
        View = GenreView;
        break;
      case `artist`:
        View = ArtistView;
        break;
      default:
        break;
    }
    return new View(this.model.state, data);
  }

  updateTimer() {
    try {
      const time = this.model.getTime();
      if (time < 1) {
        this.stopGame();
        this.goToFailScreen();
      }
      const timer = new TimerView(time);
      const timerWrapper = document.querySelector(`.main-timer`);
      timerWrapper.innerHTML = ``;
      timerWrapper.appendChild(timer.element);
    } catch (err) {
      clearInterval(this._interval);
    }
  }

  goToFailScreen() {
    this.model.resetState();
    Application.showFail();
  }

  goToStatsScreen() {
    preloadScreen.init();
    const data = {id: Date.now(), time: TOTAL_TIME - this.model.getTime(), answers: this.model.getAnswerCounter()};
    this.model.result = JSON.stringify(data);
    this.model.resetState();
    Application.showStats(`=${data.id}`);
  }

}

export default new GameScreen();
