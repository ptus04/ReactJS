import { useState } from "react";
import styles from "./Bai4.module.css";

export default function Bai4() {
  const ds = {
    Component: "Noi dung j do",
    JSX: "Noi dung khac",
    Props: "Khong giong cai vua roi",
    State: "Khac cai ban nay",
  };

  const [content, setContent] = useState(ds.Component);

  const handleTabButtonClick = (e) => {
    setContent(ds[e.target.innerText]);
  };

  return (
    <>
      <button className={styles.tabButton} onClick={handleTabButtonClick}>
        Component
      </button>
      <button className={styles.tabButton} onClick={handleTabButtonClick}>
        JSX
      </button>
      <button className={styles.tabButton} onClick={handleTabButtonClick}>
        Props
      </button>
      <button className={styles.tabButton} onClick={handleTabButtonClick}>
        State
      </button>
      <p>{content}</p>
    </>
  );
}
