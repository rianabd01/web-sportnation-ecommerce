import ImageCart from './Image';
import ProductName from './ProductName';
import Price from './Price';
import QuantityItem from './QuantityItem';
import RemoveCart from './RemoveCart';

export default function CartItem({ cartId, name, quantity, price }) {
  return (
    <li key={cartId} className="flex flex-row p-5">
      <input
        type="checkbox"
        className="w-4 h-4 m-auto accent-gray-950 border-black cursor-pointer focus:ring-gray-950  focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={isChecked}
        onChange={() => handleCheck(cartId)}
      />
      <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-4 md:grid-rows-2 m-5 justify-between gap-2 md:gap-5">
        <ImageCart name={name}></ImageCart>
      </div>
      <div className="col-span-2 row-span-2 md:row-auto md:col-span-3 flex flex-row justify-between">
        <ProductName name={name}></ProductName>
        <RemoveCart></RemoveCart>
      </div>
      <div className="col-span-3 md:col-span-3 flex flex-row justify-between">
        <QuantityItem quantity={quantity}></QuantityItem>
        <Price price={price}></Price>
      </div>
    </li>
  );
}
