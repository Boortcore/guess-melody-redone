import initialState from '../data/state';
import Model from '../AbstractModel';

export default class GameModel extends Model {
  constructor() {
    super();
    this.state = initialState;
    this.questions = null;
    this.correctAnswers = 0;
    this.result = null;
    this.getResults = this.getResults.bind(this);
    this.send = this.send.bind(this);
  }
  get urlRead() {
    return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
  }

  get urlWrite() {
    return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/3341`;
  }
  get urlStatistic() {
    return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/3341`;
  }

  get _numberOfQuestions() {
    return this.questions.length;
  }
  setQuestions(data) {
    this.questions = data;
  }
  getQuestion() {
    return this.questions[this._getLevel()];
  }

  getTime() {
    return this.state.time;
  }

  getAnswerCounter() {
    return this.correctAnswers;
  }
  updateState(answerValue) {
    this._takeAnswer(answerValue);
    this._setLivesValue(answerValue);
    this._changeLevel();
  }

  tick() {
    this.state = Object.assign({}, this.state, {time: this.state.time - 1});
  }
  resetState() {
    this.state = initialState;
    this.correctAnswers = 0;
  }
  getResults() {
    return fetch(this.urlStatistic)
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        }
        throw new Error(`Server responded with an error`);
      })
      .then((data) => data);
  }
  isFail() {
    return this._getLives() === 0 || this.getTime() < 0
  }
  isSuccess() {
    return this._getLevel() > this._numberOfQuestions - 1
  }

  _changeLevel() {
    const level = this.state.level + 1;
    this.state = Object.freeze(Object.assign({}, this.state, {level}));
  }
  _getLevel() {
    return this.state.level;
  }
  _getLives() {
    return this.state.lives;
  }
  _takeAnswer(answer) {
    if (answer) {
      ++this.correctAnswers;
    }
  }
  _setLivesValue(answer) {
    const lives = this.state.lives - 1;
    this.state = answer ? this.state : Object.assign({}, this.state, {lives});
  }
}
