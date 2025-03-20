import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import DateTime from "./components/DateTime";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

const initialState = [];

const reducer = (todos, { type, index, text }) => {
  switch (type) {
    case "CREATE":
      return [...todos, { text, isDone: false }];
    case "CHECK":
      return todos.map((todo, i) =>
        i === index ? { ...todo, isDone: !todo.isDone } : todo,
      );
    case "UPDATE":
      return todos.map((todo, i) => (i === index ? { ...todo, text } : todo));
    case "DELETE":
      return todos.filter((_, i) => i !== index);
    default:
      return todos;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [dateTime, setDateTime] = useState(new Date());
  const input = useRef();
  const editing = useRef(-1);

  const handleInputEnter = useCallback(
    ({ key }) => {
      if (key === "Enter") {
        const text = input.current.value;

        if (editing.current === -1) dispatch({ type: "CREATE", text });
        else {
          dispatch({ type: "UPDATE", index: editing.current, text });
          editing.current = -1;
        }

        input.current.value = "";
      }
    },
    [dispatch],
  );

  const handleCheckTodo = useCallback(
    (index) => dispatch({ type: "CHECK_TODO", index }),
    [dispatch],
  );

  const handleEditTodo = useCallback(
    (index) => {
      editing.current = index;
      input.current.value = todos[index].text;
    },
    [todos],
  );

  const handleDeleteTodo = useCallback(
    (index) => dispatch({ type: "DELETE", index }),
    [dispatch],
  );

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-md flex flex-col gap-4">
      <div className="flex w-full flex-col flex-wrap items-center justify-center">
        <h1 className="text-4xl">Todo app</h1>
        <DateTime dateTime={dateTime} />
      </div>

      <TodoInput ref={input} onKeyDown={handleInputEnter} />

      <div>
        {todos.length ? (
          <ul className="flex flex-col gap-2">
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                id={index}
                onCheck={handleCheckTodo}
                onEdit={handleEditTodo}
                onDelete={handleDeleteTodo}
                isDeleteDisabled={editing.current === index}
                isDone={todo.isDone}
              >
                {todo.text}
              </TodoItem>
            ))}
          </ul>
        ) : (
          <p className="text-center">No todos</p>
        )}
      </div>
    </div>
  );
}

export default App;
