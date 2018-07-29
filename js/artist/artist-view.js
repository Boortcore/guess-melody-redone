import AbstractView from '../AbstractView';

const renderAnswers = function (answers) {
  return answers.map((answer, index) => {
    return (
      `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${index + 1}" name="answer" value="${answer.isCorrect}" />
        <label class="main-answer" for="answer-${index + 1}">
          <img class="main-answer-preview" src="${answer.image.url}">
          ${answer.title} <br>  ${answer.isCorrect}
        </label>
      </div>`);
  }).join(`\n`);
};

export default class ArtistView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }
  get template() {
    return `<section class="main main--level main--level-artist">
      <div class="main-timer"></div>
      <div class="main-wrap">
        <h2 class="title main-title">${this.data.question}</h2>
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${renderAnswers(this.data.answers)}
        </form>
      </div>
    </section>`;
  }
  bind() {
    window.initializePlayer(this.element.querySelector(`.player-wrapper`), this.data.src, false);
    Array.from(this.element.querySelectorAll(`.main-answer-r`)).forEach((input) => {
      input.addEventListener(`click`, (e) => {
        const currentAnswer = e.target.value;
        this.onClick(currentAnswer);
      });
    });
  }
  onClick(e) {

  }
}
