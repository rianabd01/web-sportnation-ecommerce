export default function ImageCart({ name }) {
  return (
    <div className="row-span-2 md:row-span-2 flex flex-row gap-2 md:gap-5 w-fit">
      <img
        src="https://via.placeholder.com/300"
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
