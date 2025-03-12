export default function PrimaryButton({ onClick, children }) {
  return (
    <button
      className="flex items-center justify-center gap-1 px-4 py-2 cursor-pointer bg-[#f54985] text-[#ffeff5] rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
