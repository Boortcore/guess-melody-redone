let rightAnswersCounter = 0;

export function answerIsCorrect(answerValue, correctAnswerValue) {
  return correctAnswerValue.toString() === answerValue;
}

export function takeAnswer(answer) {
  if (answer) {
    ++rightAnswersCounter;
  }
}

export function resetAnswerCounter() {
  rightAnswersCounter = 0;
}

export function getAnswerCounter() {
  return rightAnswersCounter;
}
