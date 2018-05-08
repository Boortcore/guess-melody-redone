import GenreView from './genre-view';
import getScreenInfo from '../getScreenInfo';
import renderScreen from '../renderScreen';
import {answerIsCorrect} from "../data/answers";


export default class GenreScreen {
  constructor(state, question) {
    this.state = state;
    this.question = question;
    this.view = new GenreView(state, question);
  }

  init() {
    renderScreen(this.view);
    this.view.onClick = (answer) => {
      const correctAnswer = this.question.correctAnswer;
      getScreenInfo(this.state, answerIsCorrect(answer, correctAnswer));
    };
  }
}
