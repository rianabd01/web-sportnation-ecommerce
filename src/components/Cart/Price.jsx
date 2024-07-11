export default function Price({ price, quantity }) {
  return (
    <p className="font-['Fjalla_one'] font-bold">
      Rp. {(Number(price) * Number(quantity)).toLocaleString()}
    </p>
  );
}
