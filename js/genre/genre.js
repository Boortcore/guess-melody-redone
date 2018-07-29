import GenreView from './genre-view';
import renderScreen from '../renderScreen';

export default class GenreScreen {
  constructor(question) {
    this.question = question;
    this.view = new GenreView(question);
  }

  init() {
    renderScreen(this.view);
    this.view.onClick = (answers) => {
      const allRightIsChecked = answers
        .filter((answer) => answer.value === this.question.genre)
        .every((answer) => answer.checked === true);
      const allWrongIsUnchecked = answers
        .filter((answer) => answer.value !== this.question.genre)
        .every((answer) => answer.checked !== true);
      const currentAnswer = allRightIsChecked && allWrongIsUnchecked;

      this.getAnswer(currentAnswer);
    };
  }

  getAnswer() {

  }
}
