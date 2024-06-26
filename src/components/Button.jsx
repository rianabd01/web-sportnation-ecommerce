// eslint-disable-next-line react/prop-types
const ButtonComponents = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-100 hover:bg-gray-200 text-blue-500 font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default ButtonComponents;
