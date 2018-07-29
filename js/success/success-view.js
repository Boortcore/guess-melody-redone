// import {getPercent} from '../data/statistics';
import AbstractView from '../AbstractView';

export default class SuccessView extends AbstractView {
  constructor(data) {
    super();
    this.statistic = data;
  }

  get template() {
    let content;
    if (this.statistic) {
      const {result: {time, answers}, percent} = this.statistic;
      const minutes = String(parseInt(time / 60, 10)).padStart(2, `0`);
      const seconds = String(time % 60).padStart(2, `0`);
      content = `<section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <h2 class="title">Вы настоящий меломан!</h2>
        <div class="main-stat">За&nbsp;${minutes}:${seconds}&nbsp;минуты<br>вы&nbsp;отгадали ${answers}&nbsp;мелодии</div>
        <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${percent}%&nbsp;игроков</span>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>`;
    } else {
      content = `<section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <h2 class="title">Нет данных для отображения!</h2>
        <div class="main-stat">Начните игру, чтобы оценить <br> свои музыкальные способности</div>
        <span class="main-comparison">Нажмите конопку "Пуск"</span>
        <span role="button" tabindex="0" class="main-replay">Пуск</span>
      </section>`;
    }

    return content;
  }
  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onClick();
    });
  }
  onClick() {}
}
