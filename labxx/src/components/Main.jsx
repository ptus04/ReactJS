import { useEffect, useState } from "react";
import BlankResult from "./main/BlankResult";
import PrimaryButton from "./PrimaryButton";
import LinkButton from "./LinkButton";

export default function Main() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken",
      );

      const json = await res.json();
      console.log(json);
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <main className="mt-4 flex">
      <aside className="max-w-[250px] min-w-[250px] rounded-sm border-[1px] border-[#efefef] p-4">
        <h3>&equiv; FILTERS</h3>
        <details className="border-b-[1px] border-[hsl(0,0%,90%)] py-2" open>
          <summary className="flex justify-between">
            <h4>Type</h4>
          </summary>
          <ul className="flex flex-wrap">
            <li className="flex basis-[calc(50%-0.5rem)] gap-1">
              <input type="checkbox" /> <label>Pan-fired</label>
            </li>
            <li className="flex basis-[calc(50%-0.5rem)] gap-1">
              <input type="checkbox" /> <label>Stir-fired</label>
            </li>
            <li className="flex basis-[calc(50%-0.5rem)] gap-1">
              <input type="checkbox" defaultChecked /> <label>Grilled</label>
            </li>
            <li className="flex basis-[calc(50%-0.5rem)] gap-1">
              <input type="checkbox" defaultChecked /> <label>Roasted</label>
            </li>
            <li className="flex basis-[calc(50%-0.5rem)] gap-1">
              <input type="checkbox" /> <label>Sauteed</label>
            </li>
            <li className="flex basis-[calc(50%-0.5rem)] gap-1">
              <input type="checkbox" /> <label>Baked</label>
            </li>
            <li className="flex basis-[calc(50%-0.5rem)] gap-1">
              <input type="checkbox" /> <label>Steamed</label>
            </li>
            <li className="flex basis-[calc(50%-0.5rem)] gap-1">
              <input type="checkbox" /> <label>Stewed</label>
            </li>
          </ul>
        </details>

        <details className="border-b-[1px] border-[hsl(0,0%,90%)] py-2" open>
          <summary className="flex justify-between">
            <h4>Time</h4>
          </summary>
          <div>
            <div className="flex items-center gap-4">
              <input type="range" min="10" max="70" defaultValue="50" />
              <label>50</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="range" min="10" max="70" defaultValue="60" />
              <label>60</label>
            </div>
          </div>
        </details>

        <details className="border-b-[1px] border-[hsl(0,0%,90%)] py-2" open>
          <summary className="flex justify-between">
            <h4>Rating</h4>
          </summary>
          <ul className="flex flex-col">
            <li>
              <input type="checkbox" />{" "}
              <label className="text-2xl text-[rgb(206,206,57)]">
                ★ ★ ★ ★ ★
              </label>
            </li>
            <li>
              <input type="checkbox" />{" "}
              <label className="text-2xl text-[rgb(206,206,57)]">
                ★ ★ ★ ★ ☆
              </label>
            </li>
            <li>
              <input type="checkbox" defaultChecked />{" "}
              <label className="text-2xl text-[rgb(206,206,57)]">
                ★ ★ ★ ☆ ☆
              </label>
            </li>
            <li>
              <input type="checkbox" defaultChecked />{" "}
              <label className="text-2xl text-[rgb(206,206,57)]">
                ★ ★ ☆ ☆ ☆
              </label>
            </li>
            <li>
              <input type="checkbox" defaultChecked />{" "}
              <label className="text-2xl text-[rgb(206,206,57)]">
                ★ ☆ ☆ ☆ ☆
              </label>
            </li>
          </ul>
        </details>

        <button className="primary" style={{ width: "100%" }}>
          Apply
        </button>
      </aside>

      {data ? (
        <ul className="mx-2 mr-4 flex flex-wrap justify-between gap-4">
          {data.meals.map((meal, i) => (
            <li
              className="basis-[clamp(200px,30vw,300px)] rounded-sm border-[hsl(0,0%,90%)] bg-[hsl(0,0%,95%)] p-4"
              key={i}
            >
              <img
                className="aspect-square w-full rounded-sm"
                src={meal.strMealThumb}
                alt="Meal Thumbnail"
              />
              <p className="min-h-12">{meal.strMeal}</p>
              <div className="flex justify-between">
                <LinkButton>Read more</LinkButton>
                <PrimaryButton>Add to cart</PrimaryButton>
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
