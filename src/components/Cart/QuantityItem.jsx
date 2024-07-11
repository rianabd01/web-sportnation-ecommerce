export default function QuantityItem({ cartId, quantity }) {
  return (
    <div className="flex flex-row justify-evenly border-[1px] border-gray-950 h-10 w-20 md:w-24">
      <button
        className="text-md md:text-xl font-semibold text-center"
        onClick={() => decreaseOrderQtyHandler(cartId)}
      >
        -
      </button>
      <input
        type="text"
        className="text-center text-md md:text-[1.15rem] font-bold w-10 focus:outline-none bg-transparent text-inherit"
        readOnly
        value={quantity}
      />
      <button
        className="text-md md:text-xl font-semibold text-center"
        onClick={() => increaseOrderQtyHandler(cartId)}
      >
        +
      </button>
    </div>
  );
}
