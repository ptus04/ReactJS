import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const TodoItem = React.memo(
  ({
    id,
    isDone,
    editing,
    onCheck,
    onEdit,
    onDelete,
    isDeleteDisabled,
    children,
  }) => {
    return (
      <li
        key={id}
        className="not-first:border-t-[1px] not-first:pt-2 flex justify-between gap-1 border-gray-300"
      >
        <div>
          <input
            className="accent-green-500"
            type="checkbox"
            id={`todo-${id}`}
            defaultChecked={isDone}
            onChange={() => onCheck(id)}
          />
          <label
            htmlFor={`todo-${id}`}
            className={`ms-1 ${isDone ? "line-through" : ""}`}
          >
            {children}
          </label>
        </div>
        <div className="flex gap-1">
          <EditButton onClick={() => onEdit(id)}>
            {id === editing ? "Hủy" : "Sửa"}
          </EditButton>
          <DeleteButton
            disabled={isDeleteDisabled}
            onClick={() => onDelete(id)}
          >
            Xóa
          </DeleteButton>
        </div>
      </li>
    );
  },
);

export default TodoItem;
