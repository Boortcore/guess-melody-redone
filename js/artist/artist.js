import ArtistView from './artist-view';
import renderScreen from '../renderScreen';

export default class ArtistScreen {
  constructor(question) {
    this.question = question;
    this.view = new ArtistView(question);
  }

  init() {
    renderScreen(this.view);
    this.view.onClick = (answerValue) => {
      const answer = answerValue === `true`;
      this.getAnswer(answer);
    };
  }

  getAnswer() {

  }
}
