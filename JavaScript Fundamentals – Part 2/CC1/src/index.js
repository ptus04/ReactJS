const calcAverage = (scores) =>
  scores.reduce((acc, cur) => acc + cur, 0) / scores.length;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
}

// DATA 1
(() => {
  const dolphinsScores = [44, 23, 71];
  const koalasScores = [65, 54, 49];

  const avgDolphins = calcAverage(dolphinsScores);
  const avgKoalas = calcAverage(koalasScores);

  checkWinner(avgDolphins, avgKoalas);
})();

// DATA 2
(() => {
  const dolphinsScores = [85, 54, 41];
  const koalasScores = [23, 34, 27];

  const avgDolphins = calcAverage(dolphinsScores);
  const avgKoalas = calcAverage(koalasScores);

  checkWinner(avgDolphins, avgKoalas);
})();
