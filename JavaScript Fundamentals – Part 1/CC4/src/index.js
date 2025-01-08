var billValues = [275, 40, 430];

const calculateTip = (value) =>
  value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;

billValues.forEach((value) => {
  var tip = calculateTip(value);
  console.log(
    `The bill was ${value}, the tip was ${tip}, and the total value ${
      value + tip
    }`
  );
});
