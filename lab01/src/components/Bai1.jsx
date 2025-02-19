import { useState } from "react";

export default function Bai1() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBtnShowClick = () => {
    console.log(`Hello: ${name}`);
  };
  return (
    <>
      <input type="text" onChange={handleNameChange} />
      <button onClick={handleBtnShowClick}>Show to console</button>
    </>
  );
}
