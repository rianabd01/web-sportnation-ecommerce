// eslint-disable-next-line react/prop-types
export default function ButtonPrimary({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 border-2 border-gray-50 hover:border-neutral-950 hover:bg-gray-50 hover:rounded-md transition-all text-inherit font-bold  px-4 h-12 rounded-xl"
    >
      {children}
    </button>
  );
}
