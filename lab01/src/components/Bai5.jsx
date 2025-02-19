import { useState } from "react";
import styles from "./Bai5.module.css";

export default function Bai5() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddClick = () => {
    setTodoList([todo, ...todoList.reverse()]);
  };

  const handleDeleteClick = (v) => {
    setTodoList(todoList.filter((_, i) => i != v));
  };

  return (
    <>
      <h1>Todos app!</h1>
      <input type="text" onChange={handleTodoChange} />
      <button onClick={handleAddClick}>Add</button>

      <ul className={styles.ulStyle}>
        {todoList.map((t, i) => (
          <li key={i} className={styles.liStyle}>
            <span>{t}</span>
            <button
              className={styles.buttonDanger}
              onClick={() => handleDeleteClick(i)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
