import { useEffect, useState } from "react";
import styles from "../css/Main.module.css";
import BlankResult from "./main/BlankResult";

export default function Main() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
      );

      const json = await res.json();
      console.log(json);
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <main>
      <aside>
        <h3>&equiv; FILTERS</h3>
        <details open>
          <summary>
            <h4>Type</h4>
          </summary>
          <ul className={styles.filter}>
            <li>
              <input type="checkbox" /> <label>Pan-fired</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Stir-fired</label>
            </li>
            <li>
              <input type="checkbox" defaultChecked /> <label>Grilled</label>
            </li>
            <li>
              <input type="checkbox" defaultChecked /> <label>Roasted</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Sauteed</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Baked</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Steamed</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Stewed</label>
            </li>
          </ul>
        </details>

        <details open>
          <summary>
            <h4>Time</h4>
          </summary>
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <input type="range" min="10" max="70" defaultValue="50" />
              <label>50</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <input type="range" min="10" max="70" defaultValue="60" />
              <label>60</label>
            </div>
          </div>
        </details>

        <details open>
          <summary>
            <h4>Rating</h4>
          </summary>
          <ul className={styles.rating}>
            <li>
              <input type="checkbox" /> <label>★ ★ ★ ★ ★</label>
            </li>
            <li>
              <input type="checkbox" /> <label>★ ★ ★ ★ ☆</label>
            </li>
            <li>
              <input type="checkbox" defaultChecked /> <label>★ ★ ★ ☆ ☆</label>
            </li>
            <li>
              <input type="checkbox" defaultChecked /> <label>★ ★ ☆ ☆ ☆</label>
            </li>
            <li>
              <input type="checkbox" defaultChecked /> <label>★ ☆ ☆ ☆ ☆</label>
            </li>
          </ul>
        </details>

        <button className="primary" style={{ width: "100%" }}>
          Apply
        </button>
      </aside>

      {data ? (
        <ul className={styles.list}>
          {data.meals.map((meal, i) => (
            <li key={i} className={styles.item}>
              <img src={meal.strMealThumb} alt="Meal Thumbnail" />
              <p style={{ minHeight: "3rem" }}>{meal.strMeal}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button className="link">Read more</button>
                <button className="primary">Add to cart</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <BlankResult />
      )}
    </main>
  );
}
