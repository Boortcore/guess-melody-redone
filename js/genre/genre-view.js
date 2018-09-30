import AbstractView from '../AbstractView';

const renderAnswers = function (answers, correct) {
  return answers.map((answer, index) => {
    return (
      `<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="${answer.genre}" id="answer-${index + 1}" ${answer.genre === correct ? `checked` : ``}/>
        <label style="color: black" class="genre-answer-check" for="answer-${index + 1}">${answer.genre === correct}</label>
      </div>`
    );
  }).join(`\n`);
};

export default class GenreView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }
  get template() {
    return `<section class="main main--level main--level-genre">
      <div class="main-timer"></div>
      <div class="main-wrap">
        <h2 class="title">${this.data.question}</h2>
        <form class="genre">
          ${renderAnswers(this.data.answers, this.data.genre)} 
          <button class="genre-answer-send"  type="submit">Ответить</button>
        </form>
      </div>
    </section>`;
  }
  bind() {
    const form = this.element.querySelector(`form.genre`);

    const playerWrappers = form.querySelectorAll(`.player-wrapper`);

    playerWrappers.forEach((wrapper, index) => {
      window.initializePlayer(wrapper, this.data.answers[index].src, false);
      wrapper.querySelector(`.player-control`).addEventListener(`click`, (e) => {
        e.preventDefault();
      });
    });

    const sendButton = form.querySelector(`.genre-answer-send`);

    const answers = Array.from(form.querySelectorAll(`.genre-answer input`));
    answers.forEach((answer) => {
      answer.addEventListener(`change`, () => {
        sendButton.disabled = !answers.some((item) => item.checked === true);
      });
    });

    form.addEventListener(`submit`, (e) => {
      e.preventDefault();

      this.onClick(answers, this.data.genre);
    });
  }
  onClick() {

  }
}
