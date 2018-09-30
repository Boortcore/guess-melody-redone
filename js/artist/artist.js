import ArtistView from './artist-view';
import renderScreen from '../renderScreen';
import checkAnswer from './checkAnswer'
export default class ArtistScreen {
  constructor(question) {
    this.question = question;
    this.view = new ArtistView(question);
  }

  init() {
    renderScreen(this.view);
    this.view.onClick = (answerValue) => {
      const currentAnswer = checkAnswer(answerValue);
      this.getAnswer(currentAnswer);
    };
  }

  getAnswer() {

  }
}
