export default function DeleteButton({ onClick, children, disabled }) {
  return (
    <button
      className="flex cursor-pointer items-center gap-0.5 rounded-md bg-red-500 px-3 py-1 text-amber-50 disabled:bg-red-200"
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
      <span>{children}</span>
    </button>
  );
}
