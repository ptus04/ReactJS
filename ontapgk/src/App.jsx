import { useCallback, useEffect, useReducer, useRef } from "react";
import EditButton from "./components/EditButton";
import DeleteButton from "./components/DeleteButton";
import TodoInput from "./components/TodoInput";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATETIME":
      return { ...state, dateTime: new Date() };
    case "CREATE_TODO":
      return {
        ...state,
        todos: [...state.todos, { todo: action.value, isDone: false }],
      };
    case "CHECK_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.map((v, i) => {
            if (i === action.i) {
              return { ...v, isDone: !v.isDone };
            } else return v;
          }),
        ],
      };

    default:
      return state;
  }
};

const initialState = {
  dateTime: new Date(),
  todos: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const todoInput = useRef();

  const updateDateTime = useCallback(
    () => dispatch({ type: "UPDATE_DATETIME" }),
    [dispatch],
  );

  const handleCreateTodo = useCallback(
    ({ key }) => {
      if (key === "Enter") {
        dispatch({ type: "CREATE_TODO", value: todoInput.current.value });
        todoInput.current.value = "";
      }
    },
    [dispatch],
  );

  const handleCheckTodo = useCallback(
    (i) => dispatch({ type: "CHECK_TODO", i: i }),
    [dispatch],
  );

  useEffect(() => {
    const interval = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [updateDateTime]);

  console.log(state.todos);

  return (
    <div className="w-md flex flex-col gap-4">
      <div className="flex w-full flex-col flex-wrap items-center justify-center">
        <h1 className="text-4xl">Todo app</h1>
        <h3>{state.dateTime.toLocaleDateString()}</h3>
        <h4>{state.dateTime.toLocaleTimeString()}</h4>
      </div>

      <TodoInput ref={todoInput} onKeyDown={handleCreateTodo} />

      <div>
        {state.todos.length ? (
          <ul className="flex flex-col gap-2">
            {state.todos.map((v, i) => {
              return (
                <li
                  key={i}
                  className="not-first:border-t-[1px] not-first:pt-2 flex justify-between gap-1 border-gray-300"
                >
                  <div>
                    <input
                      className="accent-green-500"
                      type="checkbox"
                      id={`todo-${i}`}
                      defaultChecked={v.isDone}
                      onChange={() => handleCheckTodo(i)}
                    />
                    <label
                      htmlFor={`todo-${i}`}
                      className={`ms-1 ${v.isDone && "line-through"}`}
                    >
                      {v.todo}
                    </label>
                  </div>
                  <div className="flex gap-1">
                    <EditButton>Chỉnh sửa</EditButton>
                    <DeleteButton>Xóa</DeleteButton>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-center">No todos</p>
        )}
      </div>
    </div>
  );
}

export default App;
