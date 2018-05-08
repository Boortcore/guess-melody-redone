import GenreScreen from './genre/genre';
import ArtistScreen from './artist/artist';
import FailScreen from './fail/fail';
import SuccessScreen from './success/success';
import {takeAnswer, getAnswerCounter, resetAnswerCounter} from "./data/answers";
import {saveResult} from "./data/statistics";
import initialState, {changeLevel, setLivesValue} from './data/state';
import questions from './data/questions';

export default function getScreen(state = initialState, answerValue) {
  let newState = Object.assign({}, state);
  let Screen = null;
  let data = null;
  if (typeof answerValue === `boolean`) {
    newState = setLivesValue(newState, answerValue);
    newState = changeLevel(newState);
    takeAnswer(answerValue);
  }
  if (newState.lives === 0) {
    Screen = FailScreen;
  } else if (newState.level > questions.length - 1) {
    data = {time: 40, answers: getAnswerCounter()};
    saveResult(data);
    resetAnswerCounter();
    Screen = SuccessScreen;
  } else {
    data = questions[newState.level];
    const nextScreenType = data.type;
    switch (nextScreenType) {
      case `genre`:
        Screen = GenreScreen;
        break;
      case `artist`:
        Screen = ArtistScreen;
        break;
      default:
        break;
    }
  }
  const screen = new Screen(newState, data);
  return screen.init();
}
