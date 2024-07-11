export default function RemoveCart() {
  return (
    <button
      className="text-end"
      onClick={() => removeProductHandler(product.cartId)}
    >
      X
    </button>
  );
}
