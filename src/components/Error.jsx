// eslint-disable-next-line react/prop-types
export const Error = ({ message }) => {
  return (
    <p className="text-center text-gray-800 dark:text-gray-200 p-10">
      {message}
    </p>
  );
};
