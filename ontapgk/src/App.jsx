import { useEffect, useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "updateDateTime":
          return { ...state, dateTime: new Date() };
        case "updateTodos": {
          let todos;
          fetch("https://657262e0d61ba6fcc014b2f8.mockapi.io/tasks")
            .then((res) => res.json())
            .then((json) => {todos = json; console.log(todos)});
          console.log(state)
          return { ...state, todos: todos }
        }
        default:
          return state;
      }
    },
    {
      dateTime: new Date(),
      todos: null,
    }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "updateDateTime" });
    }, 1000);

    dispatch({ type: "updateTodos" });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl">Todo app</h1>
        <h3>{state.dateTime.toLocaleDateString()}</h3>
        <h4>{state.dateTime.toLocaleTimeString()}</h4>
      </div>
      <div className="flex gap-1 border-1 rounded-sm px-2 py-1 w-[50%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Add a task..."
        />
      </div>
      <div>
        {state.todos && (
          <ul>
            <li>ded</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
