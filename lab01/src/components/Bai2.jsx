import { useState } from "react";
import "./Bai2.css";

export default function Bai2() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(0);

  const handleAChange = (e) => {
    setA(e.target.value);
  };

  const handleBChange = (e) => {
    setB(e.target.value);
  };

  const handleCalculateClick = () => {
    setResult(parseFloat(a) + parseFloat(b));
  };

  return (
    <>
      <input type="text" onChange={handleAChange} />
      <span>+</span>
      <input type="text" onChange={handleBChange} />
      <br />
      <button onClick={handleCalculateClick}>Calculate</button>
      <p>Result: {result}</p>
    </>
  );
}
