import { useState } from "react";
import "./App.css";
import InputWithLabel from "./components/InputWithLabel";

function App() {
  const [investment, setInvestment] = useState(0);
  const [rate, setRate] = useState(0);
  const [goal, setGoal] = useState(0);

  const handleInvestmentChange = (e) => {
    setInvestment(e.target.value);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const [tableData, setTableData] = useState([]);

  const handleOnClick = () => {
    let year = new Date().getFullYear();
    let money = parseFloat(investment);
    let newRate = parseFloat(rate) / 100;
    let endYear = money * (1 + newRate);

    const tempData = [];
    while (money < goal) {
      tempData.push({ year, money, newRate, endYear });

      year++;
      money = endYear;
      endYear = money * (1 + newRate);
    }

    setTableData(tempData);
  };

  return (
    <>
      <img
        src="https://cdn.corporatefinanceinstitute.com/assets/income-investing-1024x576.jpeg"
        alt=""
        style={{ width: "50%" }}
      />

      <InputWithLabel
        label="Input Your Invest Money"
        value={investment}
        onChange={handleInvestmentChange}
      />
      <InputWithLabel
        label="Input Rate"
        value={rate}
        onChange={handleRateChange}
      />
      <InputWithLabel
        label="Input your Goal"
        value={goal}
        onChange={handleGoalChange}
      />

      <table border={1}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Money</th>
            <th>Rate</th>
            <th>End Year</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ year, money, newRate, endYear }, index) => (
            <tr key={index}>
              <td>{year}</td>
              <td>{money.toFixed(2)}</td>
              <td>{newRate * 100}%</td>
              <td>{endYear.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleOnClick}>Click</button>
    </>
  );
}

export default App;
