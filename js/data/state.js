// import {takeAnswer} from "./answers";
//
// export default Object.freeze({
//   level: 0,
//   time: 120,
//   lives: 3,
// });
//
// export function changeLevel(state) {
//   debugger;
//   const level = state.level + 1;
//   return Object.freeze(Object.assign({}, state, {level}));
// }
// export function setLivesValue(state, answer) {
//   debugger;
//   const lives = state.lives - 1;
//   return answer ? state : Object.assign({}, state, {lives});
// }
//
// export function updateState(state, answerValue) {
//   debugger;
//   if (typeof answerValue !== `boolean`) {
//     return state;
//   }
//   takeAnswer(answerValue);
//   const newState = setLivesValue(state, answerValue);
//   return changeLevel(newState);
// }
//
// export function tick(state) {
//   debugger;
//   return Object.assign({}, state, {time: state.time - 1});
// }
