// DATA 1
(() => {
  var markMass = 78;
  var markHeight = 1.69;

  var johnMass = 92;
  var johnHeight = 1.95;

  var markBMI = markMass / (markHeight * markHeight);
  var johnBMI = johnMass / (johnHeight * johnHeight);

  var markHigherBMI = markBMI > johnBMI;

  console.log(
    markHigherBMI
      ? "Mark's BMI is higher than John's!"
      : "John's BMI is higher than Mark's!"
  );
  console.log(
    markHigherBMI
      ? `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`
      : `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`
  );
})();

// DATA 2
(() => {
  var markMass = 95;
  var markHeight = 1.88;

  var johnMass = 85;
  var johnHeight = 1.76;

  var markBMI = markMass / (markHeight * markHeight);
  var johnBMI = johnMass / (johnHeight * johnHeight);

  var markHigherBMI = markBMI > johnBMI;

  console.log(
    markHigherBMI
      ? "Mark's BMI is higher than John's!"
      : "John's BMI is higher than Mark's!"
  );
  console.log(
    markHigherBMI
      ? `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`
      : `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`
  );
})();
