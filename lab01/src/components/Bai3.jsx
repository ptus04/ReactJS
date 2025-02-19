import { useState } from "react";

export default function Bai3() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("");
  const [result, setResult] = useState(0);

  const handleAChange = (e) => {
    setA(e.target.value);
  };

  const handleBChange = (e) => {
    setB(e.target.value);
  };

  const handleCalculateClick = () => {
    if (op === "") setResult("NO OPERATOR SELECTED");
    else setResult(eval(`${a} ${op} ${b}`));
  };

  const handleOpChange = (op) => {
    setOp(op);
  };

  return (
    <>
      <input type="text" onChange={handleAChange} />
      <br />
      <input type="radio" name="op" onChange={() => handleOpChange("+")} />
      <label>+</label>
      <input type="radio" name="op" onChange={() => handleOpChange("-")} />
      <label>-</label>
      <input type="radio" name="op" onChange={() => handleOpChange("*")} />
      <label>*</label>
      <input type="radio" name="op" onChange={() => handleOpChange("/")} />
      <label>/</label>
      <br />
      <input type="text" onChange={handleBChange} />
      <br />
      <button onClick={handleCalculateClick}>Calculate</button>
      <p>Result: {result}</p>
    </>
  );
}
