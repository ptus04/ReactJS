const calculateAvg = (scores) =>
  scores.reduce((acc, curr) => acc + curr, 0) / scores.length;

const logWhoWin = (dt1, dt2) => {
  var s1 = calculateAvg(dt1.scores);
  var s2 = calculateAvg(dt2.scores);
  if (s1 < 100 && s2 < 100) {
    console.log(`No team wins the trophy!`);
  } else if (s1 < 100) {
    console.log(`${dt2.name} (${s2}) won!`);
  } else if (s2 < 100) {
    console.log(`${dt1.name}  (${s1}) won!`);
  } else {
    if ((s1 === s2)) {
      console.log(`Draw!`);
    } else if (s1 < s2) {
      console.log(`${dt2.name} (${s2}) won!`);
    } else {
      console.log(`${dt1.name} (${s1}) won!`);
    }
  }
};

// DATA 1
(() => {
  var dolphinsDataset = {
    name: "Dolphins",
    scores: [96, 108, 89],
  };
  var koalasDataset = {
    name: "Koalas",
    scores: [88, 91, 110],
  };
  logWhoWin(dolphinsDataset, koalasDataset);
})();

// DATA BONUS 1
(() => {
  var dolphinsDataset = {
    name: "Dolphins",
    scores: [97, 112, 101],
  };
  var koalasDataset = {
    name: "Koalas",
    scores: [109, 95, 123],
  };
  logWhoWin(dolphinsDataset, koalasDataset);
})();

// DATA BONUS 2
(() => {
  var dolphinsDataset = {
    name: "Dolphins",
    scores: [97, 112, 101],
  };
  var koalasDataset = {
    name: "Koalas",
    scores: [109, 95, 106],
  };
  logWhoWin(dolphinsDataset, koalasDataset);
})();
