import AbstractView from '../AbstractView';

export default class FailView extends AbstractView {
  get template() {
    return `<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">Вы проиграли</h2>
      <div class="main-stat">Ничего, вам повезет в следующий раз</div>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;
  }

  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onClick();
    });
  }

  onClick() {}
}
