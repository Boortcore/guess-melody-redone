import GenreView from './genre-view';
import renderScreen from '../renderScreen';
import checkAnswer from './checkAnswer'
export default class GenreScreen {
  constructor(question) {
    this.view = new GenreView(question);
  }

  init() {
    renderScreen(this.view);
    this.view.onClick = (answers, genre) => {
      const currentAnswer = checkAnswer(answers, genre);
      this.getAnswer(currentAnswer);
    };
  }

  getAnswer() {

  }
}
