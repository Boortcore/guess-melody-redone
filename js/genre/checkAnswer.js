export default (answers, genre) => {
  const allRightIsChecked = answers
    .filter((answer) => answer.value === genre)
    .every((answer) => answer.checked === true);
  const allWrongIsUnchecked = answers
    .filter((answer) => answer.value !== genre)
    .every((answer) => answer.checked !== true);
  return allRightIsChecked && allWrongIsUnchecked;
}
