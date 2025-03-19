export default function TodoInput({ ref, onKeyDown }) {
  return (
    <div className="border-1 flex w-full gap-1 rounded-md px-3 py-1">
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
        placeholder={"Add a task..."}
        ref={ref}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
