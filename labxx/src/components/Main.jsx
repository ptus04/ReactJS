import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
      );

      const json = await res.json();
      console.log(json);
    };

    fetchData();
  }, []);

  const data = {
    meals: [
      {
        strMeal: "15-minute chicken & halloumi burgers",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg",
        idMeal: "53085",
      },
    ],
  };

  return (
    <main style={{ display: "flex" }}>
      <aside>
        <h3>&equiv; FILTERS</h3>
        <details open>
          <summary>
            <h4>Type</h4>
          </summary>
          <ul className="filter">
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
            <input type="range" min="10" max="70" defaultValue="50" />
            <input type="range" min="10" max="70" defaultValue="60" />
          </div>
        </details>

        <details open>
          <summary>
            <h4>Rating</h4>
          </summary>
          <ul className="rating">
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

        <button
          style={{
            width: 100,
            justifyContent: "center",
            backgroundColor: "#f54985",
            color: "white",
            borderRadius: 4,
            padding: "0.5rem 1rem",
          }}
        >
          Apply
        </button>
      </aside>

      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
        }}
      >
        <h2>Sorry, no results were found for "cakescascsa"</h2>
        <img
          style={{ width: 250 }}
          src="https://cdn-icons-png.freepik.com/512/7465/7465691.png"
          alt=""
        />
        <p>We have all your Independence Day sweets covered</p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            style={{
              background: "rgb(255, 192, 203)",
              borderRadius: 16,
              color: "rgb(243, 44, 77)",
            }}
          >
            Sweet Cake
          </button>
          <button
            style={{
              background: "rgb(223, 163, 223)",
              borderRadius: 16,
              color: "rgb(145, 8, 145)",
            }}
          >
            Black Cake
          </button>
          <button
            style={{
              background: "rgb(255, 192, 203)",
              borderRadius: 16,
              color: "rgb(243, 44, 77)",
            }}
          >
            Pozole Verde
          </button>
          <button
            style={{
              background: "rgb(157, 226, 157)",
              borderRadius: 16,
              color: "rgb(5, 95, 5)",
            }}
          >
            Healthy Food
          </button>
        </div>
      </div> */}

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0.5rem 1rem",
          flex: 1,
          margin: 0,
        }}
      >
        {data.meals.map((meal, i) => (
          <li key={i}>
            <img
              style={{ aspectRatio: 1, width: 100 }}
              src={meal.strMealThumb}
              alt=""
            />
            <p>{meal.strMeal}</p>
            <p style={{ color: "hsl(0, 0%, 75%)" }}>ID: {meal.idMeal}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
