export default function LinkButton({ onClick, children }) {
  return (
    <button
      className="text-[#f54985] cursor-pointer underline"
      onClick={onClick}
    >
      {children}
    </button>
  );
}