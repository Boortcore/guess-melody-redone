export function getStatistic(results, hashId) {
  const currentResult = results.find((result) => result.id === hashId);
  if (!currentResult) {
    return null;
  }
  const betterPlayers = results.filter((result) => result !== currentResult && (result.answers > currentResult.answers
    || result.answers >= currentResult.answers && result.time < currentResult.time)).length;
  const param = betterPlayers ? betterPlayers + 1 : 0;
  const percent = parseInt((results.length - param) / results.length * 100, 10);
  return {result: currentResult, percent};
}
